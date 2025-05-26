"use client";

import { fetSuggestedConnection } from "./function";
import useSWR from "swr";
import { CPEmptyState, CPspinnerLoader } from "@/components";
import { TSuggestedNetwork } from "@/app/type";
import CPprofileNetworkCard from "@/components/CPprofileNetworkCard";

function MiddleSection() {
  const { data: suggestedNetwork = [], isLoading } = useSWR(
    "/network/suggestions",
    fetSuggestedConnection
  );

  return (
    <>
      <div className="mb-[18] px-6 py-5 gap-5  border-b border-[#E2E8F0] text-slate font-medium ">
        My Network
      </div>
      {isLoading ? (
        <CPspinnerLoader />
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
  console.log(data);

  return (
    <div className="mb-6 px-[18]">
      <div className="flex justify-between items-center ">
        <h4 className="text-sm text-slate mb-2">{title}</h4>
        <button className="text-[#64748B] text-sm">View all</button>
      </div>
      {data.length == 0 ? (
        <CPEmptyState textIcon="🛜" />
      ) : (
        data.map((item) => (
          <CPprofileNetworkCard key={item.id} profile={item} />
        ))
      )}
    </div>
  );
};
export default MiddleSection;
