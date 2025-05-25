import React from "react";
import CPprofileImg from "./CPprofileImg";

const CPprofileCard = ({ isUser = false }: { isUser?: boolean }) => {
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
      {isUser ? (
        <div>
          <button className="text-sm font-medium text-[#020617] py-2 px-3">
            Withdraw
          </button>
          <button className="text-sm font-medium text-[#020617] py-2 px-3 rounded-[5px] border border-[#7074FF]">
            Nudge
          </button>
        </div>
      ) : (
        <div>
          <button className="text-sm font-medium text-[#020617] py-2 px-3">
            Ignore
          </button>
          <button className="text-sm font-medium text-[#020617] py-2 px-3 rounded-[5px] border border-[#7074FF]">
            Accept
          </button>
        </div>
      )}
    </div>
  );
};
export default CPprofileCard;
