"use client";

import CPprofileCard from "@/components/CPprofileCard";

function MiddleSection() {
  // const { data, isLoading } = useSWR("/feed/", fetchFeeds);
  return (
    <>
      <div className="mb-[18] px-6 py-5 gap-5  border-b border-[#E2E8F0] text-[#020617] font-medium ">
        My Network
      </div>

      <div>
        <NetworkCategory title="Invitation (2)" data={[]} />
        <NetworkCategory title="New Members You Might Like" data={[]} />
      </div>
    </>
  );
}

const NetworkCategory = ({
  title,
  data,
}: {
  title: string;
  data: string[];
}) => {
  console.log(data);
  return (
    <div className="mb-6 px-[18]">
      <div className="flex justify-between items-center ">
        <h4 className="text-sm text-[#020617] mb-2">{title}</h4>
        <button className="text-[#64748B] text-sm">View all</button>
      </div>
      <CPprofileCard />
      <CPprofileCard />
      <CPprofileCard />
    </div>
  );
};
export default MiddleSection;
