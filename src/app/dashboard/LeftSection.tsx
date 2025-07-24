"use client";
import useAuth from "@/hooks/useAuth";
import useNotification from "@/hooks/useNotification";
import {
  BookmarkIcon,
  HomeIcon,
  LogoutIcon,
  NotificationIcon,
  SearchIcon,
  WifiIcon,
} from "@/imagecomponents";
import { removeData } from "@/utils/storage";
import Link from "next/link";

import { usePathname, useRouter } from "next/navigation";

function LeftSection() {
  useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const { notificationUnreadCount } = useNotification();
  return (
    <section className="w-[420] py-4 p-8 flex justify-end shrink overflow-y-scroll max-lg:w-max max-sm:hidden ">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-10">
          <Link href="/dashboard">
            <HomeIcon active={pathname == "/dashboard"} />
          </Link>
          <Link href="/dashboard/search">
            <SearchIcon
              color={pathname == "/dashboard/search" ? "#7074ff" : "#020617"}
            />
          </Link>
          <Link href="/dashboard/network">
            <WifiIcon
              color={pathname == "/dashboard/network" ? "#7074ff" : "#020617"}
            />
          </Link>
          <Link href="/dashboard/bookmark">
            <BookmarkIcon
              active={pathname == "/dashboard/bookmark"}
              color={pathname == "/dashboard/bookmark" ? "#7074ff" : "#020617"}
            />
          </Link>
          <Link href="/dashboard/notification">
            <div className="relative">
              <NotificationIcon
                active={pathname == "/dashboard/notification"}
              />
              <span className="text-red-500 font-bold text-xs absolute top-0 right-0">
                {notificationUnreadCount}
              </span>
            </div>
          </Link>
          <button
            onClick={() => {
              removeData("access_token");
              removeData("refresh_token");
              router.push("/");
            }}
            className="cursor-pointer"
            title="logout"
          >
            <LogoutIcon />
          </button>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default LeftSection;
