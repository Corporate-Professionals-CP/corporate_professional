"use client";
import { CPModal } from "@/components";
import { GeneralIcon } from "@/imagecomponents";
import ProfileIcon from "@/imagecomponents/ProfileIcon";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

function ProfileModal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const handleCloseModal = () => {
    router.push("/dashboard");
  };
  return (
    <CPModal backgroundAction={handleCloseModal} minHeight={500}>
      <div className="flex text-slate p-2 h-full">
        <div className="flex flex-col gap-8 bg-[#F8FAFC] px-4 py-8">
          <Link href={"/dashboard/profile"}>
            <ProfileIcon
              color={pathname == "/dashboard/profile" ? "#7074ff" : "#020617"}
            />
          </Link>
          <Link href={"/dashboard/profile/post"}>
            <GeneralIcon
              color={
                pathname == "/dashboard/profile/post" ? "#7074ff" : "#020617"
              }
            />
          </Link>
        </div>

        {children}
      </div>
    </CPModal>
  );
}

export default ProfileModal;
