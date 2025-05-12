"use client";

import CPprofileImg from "@/components/CPprofileImg";

function MiddleSection() {
  return (
    <section className="w-[600] border border-[#E2E8F0] ">
      <div className="mb-[18] px-6 py-5 gap-5  border-b border-[#E2E8F0] text-[#020617] font-medium ">
        My Network
      </div>

      <div>
        <NetworkCategory title="Invitation (2)" data={[]} />
        <NetworkCategory title="New Members You Might Like" data={[]} />
      </div>
    </section>
  );
}

const CPprofileCard = () => {
  return (
    <div className="flex gap-5 items-center p-3.5">
      <CPprofileImg />
      <div className="flex-1">
        <p className="flex gap-3 items-center">
          <span className="text-[#050505] ">Femi Johnson</span>
          <span className="text-primary font-medium py-1 px-2 bg-[#F8FAFC]  text-xs rounded-full">
            Talent
          </span>
        </p>
        <p className="text-[#64748B] text-sm">
          Creative Director at the noti company
        </p>
      </div>
      <div>
        <button className="text-sm font-medium text-[#020617] py-2 px-3">
          Ignore
        </button>
        <button className="text-sm font-medium text-[#020617] py-2 px-3 rounded-[5px] border border-[#7074FF]">
          Accept
        </button>
      </div>
    </div>
  );
};

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
