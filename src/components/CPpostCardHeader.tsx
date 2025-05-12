import MoreIcon from "@/imagecomponents/MoreIcon";
import React from "react";

function CPpostCardHeader() {
  return (
    <div className="flex justify-between mb-4">
      <div>
        <p className="font-medium text-sm text-[#020617]">
          Femi Johnson{" "}
          <span className="text-xs text-[#94A3B8] font-normal">
            {" "}
            • Following{" "}
          </span>
        </p>
        <p className="text-[#64748B] text-sm ">Multidisciplinary Designer.</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[#64748B] text-xs">1D</span>
        <MoreIcon />
      </div>
    </div>
  );
}

export default CPpostCardHeader;
