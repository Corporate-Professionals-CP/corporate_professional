"use client";
import CPprofileCard from "@/components/CPprofileCard";

import { LeftArrow } from "@/imagecomponents";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import { fetchPendingNetwork, fetchSentPendingNetwork } from "../function";
import { CPEmptyState, CPspinnerLoader } from "@/components";

function page() {
  return <MiddleSection />;
}

export default page;

function MiddleSection() {
  const { data: pendingConnection = [], isLoading } = useSWR(
    "/network/pending",
    fetchPendingNetwork
  );
  const { data: sentConnection = [], isLoading: isSentLoading } = useSWR(
    "/network/sent-pending",
    fetchSentPendingNetwork
  );
  return (
    <>
      <div className="mb-[18] px-6 py-5  border-b border-[#E2E8F0] text-slate font-medium flex items-center gap-6">
        <Link href={"/dashboard/network"}>
          <LeftArrow />
        </Link>
        <span className="text-lg">Pending requests</span>
      </div>
      {isLoading || isSentLoading ? (
        <CPspinnerLoader />
      ) : (
        <div className="p-[18]">
          <div className="flex justify-between items-center">
            <p className="text-slate font-medium text-sm">
              Pending requests ({pendingConnection.length})
            </p>
          </div>
          <div>
            {pendingConnection.length == 0 ? (
              <CPEmptyState textIcon="🛜" />
            ) : (
              pendingConnection.map((item) => (
                <CPprofileCard key={item.id} profile={item} />
              ))
            )}
          </div>
          <div className="flex justify-between items-center">
            <p className="text-slate font-medium text-sm">
              Sent pending requests ({sentConnection.length})
            </p>
          </div>
          <div>
            {sentConnection.length == 0 ? (
              <CPEmptyState textIcon="🛜" />
            ) : (
              sentConnection.map((item) => (
                <CPprofileCard isUser key={item.id} profile={item} />
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
}
