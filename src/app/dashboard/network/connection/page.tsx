"use client";
import CPprofileNetworkCard from "@/components/CPprofileNetworkCard";
import { LeftArrow, SearchIcon } from "@/imagecomponents";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import { fetConnections } from "../function";
import { CPspinnerLoader } from "@/components";

function page() {
  return <MiddleSection />;
}

export default page;

function MiddleSection() {
  const { data, isLoading } = useSWR("/network/my-connections", fetConnections);
  return (
    <>
      <div className="mb-[18] px-6 py-5  border-b border-[#E2E8F0] text-[#020617] font-medium flex items-center gap-6">
        <Link href={"/dashboard/network"}>
          <LeftArrow />
        </Link>
        <span className="text-lg">Connections</span>
      </div>
      <div className="p-[18]">
        <div className="flex items-center gap-[11] py-3 mb-1 border border-[#E2E8F0] rounded-full p-3">
          <SearchIcon size={20} />
          <input placeholder="Search by name" className="text-sm flex-1" />
        </div>
      </div>
      {isLoading ? (
        <CPspinnerLoader />
      ) : (
        <div className="p-[18]">
          <div className="flex justify-between items-center">
            <p className="text-[#020617] font-medium text-sm">
              120 Connections
            </p>
          </div>

          <div>
            <CPprofileNetworkCard />
            <CPprofileNetworkCard />
            <CPprofileNetworkCard />
            <CPprofileNetworkCard />
          </div>
        </div>
      )}
    </>
  );
}
