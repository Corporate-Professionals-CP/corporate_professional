"use client";

import { LeftArrow, SearchIcon } from "@/imagecomponents";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import { fetchConnections } from "../function";
import { CPEmptyState } from "@/components";
import CPprofileConnectionCard from "@/components/CPprofileConnectionCard";
import CPprofileCardSkeleton from "@/components/CPprofileCardSkeleton";

function page() {
  return <MiddleSection />;
}

export default page;

function MiddleSection() {
  const { data = [], isLoading } = useSWR(
    "/network/my-connections",
    fetchConnections
  );
  return (
    <>
      <div className="mb-[18] px-6 py-5  border-b border-[#E2E8F0] text-slate font-medium flex items-center gap-6">
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
        <NetworkConnectionSkeleton />
      ) : (
        <div className="p-[18]">
          <div className="flex justify-between items-center">
            <p className="text-slate font-medium text-sm">
              {data.length} Connections
            </p>
          </div>

          <div>
            {data.length == 0 ? (
              <CPEmptyState textIcon="🛜" btnText="No Connection" />
            ) : (
              data.map((item) => (
                <CPprofileConnectionCard key={item.id} profile={item} />
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
}

const NetworkConnectionSkeleton = () => {
  return (
    <div>
      <CPprofileCardSkeleton />
      <CPprofileCardSkeleton />
      <CPprofileCardSkeleton />
      <CPprofileCardSkeleton />
    </div>
  );
};
