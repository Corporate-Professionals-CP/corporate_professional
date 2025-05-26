import React from "react";
import CPprofileImg from "./CPprofileImg";

const CPprofileCardSmall = () => {
  return (
    <div className="flex gap-5 items-start p-3.5">
      <CPprofileImg size={40} />
      <div className="flex-1">
        <p className="flex gap-3 items-center">
          <span className="text-[#050505] text-sm">Femi Johnson</span>
        </p>
        <p className="text-[#64748B] text-sm">
          Creative Director at the noti company
        </p>
      </div>
      <div>
        <button className="text-sm font-medium text-slate py-2 px-3 rounded-[5px] border border-[#E2E8F0]">
          Connect
        </button>
      </div>
    </div>
  );
};

export default CPprofileCardSmall;
