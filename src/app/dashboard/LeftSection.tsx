"use client";
import useAuth from "@/hooks/useAuth";
import {
  BookmarkIcon,
  HomeIcon,
  NotificationIcon,
  SearchIcon,
  WifiIcon,
} from "@/imagecomponents";
import Link from "next/link";

import { usePathname } from "next/navigation";

function LeftSection() {
  useAuth();
  const pathname = usePathname();
  return (
    <section className="w-[420] py-4 p-8 flex justify-end">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-10">
          <Link href="/dashboard/profile">
            <HomeIcon
              color={pathname == "/dashboard" ? "#7074ff" : "#020617"}
            />
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
              color={pathname == "/dashboard/bookmark" ? "#7074ff" : "#020617"}
            />
          </Link>
          <Link href="/dashboard/notification">
            <NotificationIcon
              color={
                pathname == "/dashboard/notification" ? "#7074ff" : "#020617"
              }
            />
          </Link>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default LeftSection;
