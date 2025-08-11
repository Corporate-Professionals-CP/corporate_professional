"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { decodeJwtPayload } from "@/lib/google-oauth";
import { storeData } from "@/utils/storage";
import { httpRequest } from "@/utils";
import useUser from "@/statestore/useUser";
import { CPheader } from "@/components";

type IdPayload = {
  aud: string;
  iss: string;
  sub: string;
  email?: string;
  email_verified?: boolean;
  exp: number;
  iat: number;
  nonce?: string;
};

export default function GoogleCallback() {
  const router = useRouter();
  const [err, setErr] = useState<string | null>(null);
  const setUser = useUser((state) => state.setUser);

  useEffect(() => {
    (async () => {
      // Parse hash fragment from Google (e.g., #id_token=...&state=...&...)
      const params = new URLSearchParams(
        window.location.hash.replace(/^#/, "")
      );
      const id_token = params.get("id_token");
      const state = params.get("state");
      const error = params.get("error");

      if (error) {
        setErr(`Google error: ${error}`);
        return;
      }
      const savedState = sessionStorage.getItem("g_state");
      const savedNonce = sessionStorage.getItem("g_nonce");

      if (!id_token || !state || state !== savedState) {
        setErr("Missing or invalid OAuth params.");
        return;
      }

      // Optional local nonce check (backend will still verify signature + nonce)
      const payload = decodeJwtPayload<IdPayload>(id_token);
      if (!payload || (savedNonce && payload.nonce !== savedNonce)) {
        setErr("Invalid token/nonce.");
        return;
      }

      try {
        // Send exactly what your backend expects
        const response = await httpRequest.post("auth/google", {
          id_token: id_token,
        });

        storeData("access_token", response.data.access_token);
        storeData("refresh_token", response.data.refresh_token);
        setUser(response.data.user);
        router.replace("/dashboard");

        // Clean up
        sessionStorage.removeItem("g_state");
        sessionStorage.removeItem("g_nonce");

        router.replace("/dashboard");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        setErr(e.message || "Sign-in failed");
      }
    })();
  }, [router, setUser]);

  return (
    <>
      <CPheader />
      <main className="min-h-screen grid place-items-center">
        {err ? <p>❌ {err}</p> : <p>Signing you in…</p>}
      </main>
    </>
  );
}
