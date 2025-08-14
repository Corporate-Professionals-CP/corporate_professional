"use client";
import useUser from "@/statestore/useUser";
import httprequest from "@/utils/httpRequest";
import { getData } from "@/utils/storage";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import useSWRMutation from "swr/mutation";
// import useSWR from "swr";

function useAuth() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setuser = useUser((state) => state.setUser);

  const currentUrl = useMemo(() => {
    const qs = searchParams?.toString();
    return qs ? `${pathname}?${qs}` : pathname || "/";
  }, [pathname, searchParams]);
  // const isLoginRoute = pathname === "/login";
  const { trigger } = useSWRMutation("/profiles/me", async (url: string) => {
    const { data } = await httprequest.get(url);
    setuser(data);
  });

  const goToLoginWithNext = () => {
    router.push(`/login?next=${encodeURIComponent(currentUrl)}`);
  };

  useEffect(() => {
    // check if access token, add it to the header
    const access_token = getData("access_token");
    if (access_token) {
      httprequest.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${access_token}`;
      trigger();
    } else {
      goToLoginWithNext();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, trigger, currentUrl]);

  useEffect(() => {
    const responseInterceptor = httprequest.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          console.warn("401 detected, redirecting to login...");
          goToLoginWithNext();
        }
        return Promise.reject(error);
      }
    );

    return () => {
      httprequest.interceptors.response.eject(responseInterceptor);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return null;
}

export default useAuth;
