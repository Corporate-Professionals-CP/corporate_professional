"use client";
import CPprofileCard from "@/components/CPprofileCard";
import React from "react";
import useSWR from "swr";
import { fetchPendingNetwork, fetchSentPendingNetwork } from "../function";
import { CPdashboardBack, CPEmptyState } from "@/components";
import CPprofileCardSkeleton from "@/components/CPprofileCardSkeleton";

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
      <CPdashboardBack title="Pending requests" link="/dashboard/network" />

      <div className="p-[18]">
        {isLoading ? (
          <NetworkPendingSkeleton />
        ) : (
          <>
            <div className="flex justify-between items-center">
              <p className="text-slate font-medium text-sm">
                Pending requests ({pendingConnection.length})
              </p>
            </div>
            <div className="mb-6">
              {pendingConnection.length == 0 ? (
                <CPEmptyState textIcon="🛜" btnText="No Connection" />
              ) : (
                pendingConnection.map((item) => (
                  <CPprofileCard key={item.id} profile={item} />
                ))
              )}
            </div>
          </>
        )}
        {isSentLoading ? (
          <NetworkPendingSkeleton />
        ) : (
          <>
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
          </>
        )}
      </div>
    </>
  );
}

const NetworkPendingSkeleton = () => {
  return (
    <div>
      <CPprofileCardSkeleton />
      <CPprofileCardSkeleton />
      <CPprofileCardSkeleton />
      <CPprofileCardSkeleton />
    </div>
  );
};
