"use client";
import httprequest from "@/utils/httpRequest";
import { getData } from "@/utils/storage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function useAuth() {
  const router = useRouter();

  useEffect(() => {
    // check if access token, add it to the header
    const access_token = getData("access_token");
    if (access_token) {
      httprequest.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${access_token}`;
    } else {
      router.push("/login");
    }
  }, []);

  return null;
}

export default useAuth;
