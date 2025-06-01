"use client";

import useSWR from "swr";
import { CPEmptyState } from "@/components";
import { TSuggestedNetwork } from "@/app/type";
import CPprofileNetworkCard from "@/components/CPprofileNetworkCard";

import CPprofileCardSkeleton from "@/components/CPprofileCardSkeleton";
import { useState } from "react";

function MiddleSection() {
  const { data, isLoading } = useSWR("/network/suggestions", {
    revalidateOnMount: false,
  });
  const suggestedNetwork = data?.suggestions || [];
  return (
    <>
      <div className="mb-[18] px-6 py-5 gap-5  border-b border-[#E2E8F0] text-slate font-medium ">
        My Network
      </div>
      {isLoading ? (
        <NetworkSkeleton />
      ) : (
        <div>
          {/* <NetworkCategory title="Invitation (2)" data={[]} /> */}
          <NetworkCategory
            title="New Members You Might Like"
            data={suggestedNetwork}
          />
        </div>
      )}
    </>
  );
}

const NetworkCategory = ({
  title,
  data,
}: {
  title: string;
  data: TSuggestedNetwork[];
}) => {
  const [count, setCount] = useState(10);
  return (
    <div className="mb-6 px-[18]">
      <div className="flex justify-between items-center ">
        <h4 className="text-sm text-slate mb-2">{title}</h4>
        <button
          className="text-[#64748B] text-sm"
          onClick={() => {
            if (count > 10) {
              setCount(10);
            } else {
              setCount(data.length);
            }
          }}
        >
          {count <= 10 ? "View all" : "View less"}
        </button>
      </div>
      {data.length == 0 ? (
        <CPEmptyState textIcon="🛜" />
      ) : (
        data
          .slice(0, count)
          .map((item) => <CPprofileNetworkCard key={item.id} profile={item} />)
      )}
    </div>
  );
};

const NetworkSkeleton = () => {
  return (
    <div>
      <CPprofileCardSkeleton />
      <CPprofileCardSkeleton />
      <CPprofileCardSkeleton />
      <CPprofileCardSkeleton />

      <CPprofileCardSkeleton />
      <CPprofileCardSkeleton />
      <CPprofileCardSkeleton />
      <CPprofileCardSkeleton />
    </div>
  );
};

export default MiddleSection;
