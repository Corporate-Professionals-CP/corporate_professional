import React from "react";
import CPprofileImg from "./CPprofileImg";
import MoreIcon from "@/imagecomponents/MoreIcon";
import TopRightIcon from "@/imagecomponents/TopRightIcon";

function CPprofileNetworkCard() {
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
      <div className="flex gap-2">
        <button>
          <TopRightIcon />
        </button>
        <button>
          <MoreIcon />
        </button>
      </div>
    </div>
  );
}

export default CPprofileNetworkCard;
