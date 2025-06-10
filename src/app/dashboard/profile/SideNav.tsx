import React from "react";
import { GeneralIcon } from "@/imagecomponents";
import ProfileIcon from "@/imagecomponents/ProfileIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SideNav({ className }: { className: string }) {
  const pathname = usePathname();
  return (
    <div className={`flex flex-col gap-8 bg-[#F8FAFC] px-4 py-8 ${className}`}>
      <Link href={"/dashboard/profile"}>
        <ProfileIcon
          color={pathname == "/dashboard/profile" ? "#7074ff" : "#020617"}
        />
      </Link>
      <Link href={"/dashboard/profile/post"}>
        <GeneralIcon
          color={pathname == "/dashboard/profile/post" ? "#7074ff" : "#020617"}
        />
      </Link>
    </div>
  );
}

export default SideNav;
