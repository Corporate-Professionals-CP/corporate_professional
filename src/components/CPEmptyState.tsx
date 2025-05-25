import React from "react";

function CPEmptyState({
  textIcon = "💼",
  btnText = "",
  action = () => {},
}: {
  textIcon?: string;
  btnText?: string;
  action?: () => void;
}) {
  return (
    <div className="flex flex-col gap-8 items-center py-24">
      <div className="w-[144] h-[144] bg-[#7074FF1A] grid place-content-center rounded-full text-5xl">
        {textIcon}
      </div>
      {btnText && (
        <button
          className="rounded-lg px-3 py-2 bg-[#F8FAFC] cursor-pointer"
          onClick={action}
        >
          {btnText}
        </button>
      )}
    </div>
  );
}

export default CPEmptyState;
