"use client";
import CPprofileCard from "@/components/CPprofileCard";

import { LeftArrow } from "@/imagecomponents";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import { fetchPendingNetwork } from "../function";
import { CPspinnerLoader } from "@/components";

function page() {
  return <MiddleSection />;
}

export default page;

function MiddleSection() {
  const { data, isLoading } = useSWR("/network/pending", fetchPendingNetwork);
  return (
    <>
      <div className="mb-[18] px-6 py-5  border-b border-[#E2E8F0] text-[#020617] font-medium flex items-center gap-6">
        <Link href={"/dashboard/network"}>
          <LeftArrow />
        </Link>
        <span className="text-lg">Pending requests</span>
      </div>
      {isLoading ? (
        <CPspinnerLoader />
      ) : (
        <div className="p-[18]">
          <div className="flex justify-between items-center">
            <p className="text-[#020617] font-medium text-sm">
              Pending requests (9)
            </p>
          </div>
          <div>
            <CPprofileCard isUser />
            <CPprofileCard isUser />
            <CPprofileCard isUser />
            <CPprofileCard isUser />
          </div>
        </div>
      )}
    </>
  );
}
