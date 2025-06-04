"use client";

import { LeftArrow, SearchIcon } from "@/imagecomponents";
import Link from "next/link";
import React, { useState } from "react";
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
  const [search, setSearch] = useState("");
  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }
  const filteredData = data.filter(
    (con) =>
      con.receiver.full_name.toLowerCase().includes(search.toLowerCase()) ||
      con.sender.full_name.toLowerCase().includes(search.toLowerCase())
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
          <input
            placeholder="Search by name"
            className="text-sm flex-1"
            onChange={handleSearch}
          />
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
              filteredData.map((item) => (
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
