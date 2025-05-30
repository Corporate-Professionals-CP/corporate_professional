"use client";
import useUser from "@/statestore/useUser";
import React from "react";
import CPprofileImg from "./CPprofileImg";
import Link from "next/link";

function Cpdiscoverability() {
  const user = useUser((state) => state.user);
  return (
    <div className="flex gap-4 items-center mb-6">
      <Link href={"/dashboard/profile"}>
        <CPprofileImg size={63} />
      </Link>
      <div>
        <p>
          <span className="font-medium text-2xl">
            {user?.profile_completion}
          </span>
          <span className="text-xs">%</span>
        </p>
        <p className="text-[#64748B] text-sm">Discoverability</p>
      </div>
    </div>
  );
}

export default Cpdiscoverability;
