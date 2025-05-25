import MoreIcon from "@/imagecomponents/MoreIcon";
import React from "react";

function CPpostCardHeader({
  name,
  job_title,
  created_at,
}: {
  name?: string;
  job_title?: string;
  created_at?: string;
}) {
  return (
    <div className="flex justify-between mb-4">
      <div>
        <p className="font-medium text-sm text-[#020617]">
          {name}
          <span className="text-xs text-[#94A3B8] font-normal">
            {" "}
            • Following{" "}
          </span>
        </p>
        <p className="text-[#64748B] text-sm ">{job_title}</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[#64748B] text-xs">{created_at}</span>
        <MoreIcon />
      </div>
    </div>
  );
}

export default CPpostCardHeader;
