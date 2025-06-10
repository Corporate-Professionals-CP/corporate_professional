"use client";
import React, { useEffect, useRef, useState } from "react";

function CPSwitchField({
  items,
  className,
}: {
  items: { val: string; action: () => void }[];
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [selectTab, setSelectTab] = useState(0);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className={`hidden text-lg text-[#020617] gap-[10px] items-center relative max-sm:inline-flex ${className}`}
        ref={dropdownRef}
      >
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-[10px] cursor-pointer"
        >
          <p>{items[selectTab].val}</p>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 10L8 12.5L10.5 10M5.5 6L8 3.5L10.5 6"
              stroke="#667085"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {open && (
          <div className="careershadow absolute top-3 z-20 bg-white border border-[#E2E8F0] p-3 w-[150px] ">
            {items.map((item, i) => (
              <p
                key={i}
                className="p-1.5"
                onClick={() => {
                  setOpen(false);
                  item.action();
                  setSelectTab(i);
                }}
              >
                {item.val}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default CPSwitchField;
