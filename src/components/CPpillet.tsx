import { CloseIcon } from "@/imagecomponents";
import React from "react";

function CPpillet({
  name,
  action = () => {},
}: {
  name: string;
  action?: () => void;
}) {
  return (
    <div className="text-xs py-2 px-3 gap-2 bg-[#F8FAFC] rounded-full w-max flex items-center">
      <span> {name}</span>
      <button onClick={action}>
        <CloseIcon />
      </button>
    </div>
  );
}

export default CPpillet;
