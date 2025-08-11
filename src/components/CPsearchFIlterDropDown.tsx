"use client";
import { CloseIcon } from "@/imagecomponents";
import React, { useEffect, useRef, useState } from "react";

type CPselectType = {
  className?: string;
  value?: string;
  placeholder?: string;
  items?: { text: string; val: string; number?: number }[];
  onChange?: (e: string) => void;
  tabText: string;
  prefix?: string;
};

function CPsearchFIlterDropDown({
  items,
  placeholder,
  tabText,
  value = "",
  prefix = "",
  onChange = () => {},
}: CPselectType) {
  const [open, setOpen] = useState(false);

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
      <div className="relative" ref={dropdownRef}>
        <div onClick={() => setOpen((s) => !s)}>
          <CPsmallTab text={tabText} value={value} prefix={prefix} />
        </div>
        {open && (
          <div className="min-w-[300] min-h-[200] bg-white absolute top-16 shadow-dropdown rounded-lg p-1">
            <div className="flex border-b border-[#F1F5F9] items-center justify-between">
              <input className="flex-1 py-3 px-2" placeholder={placeholder} />
              <button className="p-2 text-sm text-slate">Done</button>
            </div>

            <Pill
              value={value}
              cancel={() => {
                onChange("");
              }}
            />

            <p className="text-xs text-[#64748B] p-2">Suggestions</p>
            {items?.map((item) => (
              <div
                key={item.val}
                className="px-2 py-3 text-[#64748B] text-sm hover:bg-[#F8FAFC] cursor-pointer flex items-center justify-between gap-1"
                // {...props}
                onClick={() => {
                  onChange(item.val); // notify React Hook Form
                  setOpen(false);
                }}
              >
                <span>{item.text}</span>
                <span>{item.number}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default CPsearchFIlterDropDown;

const CPsmallTab = ({
  text,
  value,
  prefix,
}: {
  text: string;
  value: string;
  prefix: string;
}) => {
  const style =
    "py-2 px-3 text-sm text-[#64748B] border border-[#E2E8F0] rounded-full cursor-pointer w-max max-w-[150px] overflow-hidden whitespace-nowrap text-ellipsis hover:bg-primary hover:text-white transition-all";
  if (value) {
    return (
      <div className={`${style} bg-[#7074FF1A]`}>
        <span className="text-primary">{prefix || text}</span>:{" "}
        <span className=" text-primary font-medium">{value}</span>
      </div>
    );
  }
  return <div className={style}>{text}</div>;
};

const Pill = ({ value, cancel }: { value: string; cancel: () => void }) => {
  return (
    value && (
      <div className="py-2 px-3 mt-2 text-xs text-primary border border-[#E2E8F0] rounded-full cursor-pointer w-max max-w-[500px] overflow-hidden whitespace-nowrap text-ellipsis bg-[#7074FF1A] flex gap-2">
        {value}
        <button onClick={cancel} className="cursor-pointer">
          <CloseIcon color="#7074ff" />
        </button>
      </div>
    )
  );
};
