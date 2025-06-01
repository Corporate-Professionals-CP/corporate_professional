"use client";
import DropDownIcon from "@/imagecomponents/DropDownIcon";
import { useEffect, useRef, useState } from "react";
// import { ChangeHandler } from "react-hook-form";

type CPselectType = {
  className?: string;

  placeholder?: string;
  error?: string;
  items?: { text: string; val: string }[];
  value?: string;
  onChange?: (e: string) => void;
};

function CPselect({
  className = "",
  error = "",
  placeholder = "Select here",
  items,
  value,
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
    <div className="w-full relative" ref={dropdownRef}>
      <div
        className={`w-full min-h-[45] relative bg-[#F8FAFC] px-4 py-3.5 text-sm text-slate rounded-lg ${className}`}
        onClick={() => setOpen((s) => !s)}
      >
        {items?.find((v) => v.val == value)?.text || (
          <span className="text-[#64748B]">{placeholder}</span>
        )}
        <div className="absolute right-4 top-3.5">
          <DropDownIcon />
        </div>
      </div>
      {error && (
        <p className="text-[#E62E2E] text-sm -translate-1.5 mb-0">{error}</p>
      )}
      {open && (
        <div className="min-w-[223] min-h-[200] max-h-[300] bg-white absolute top-16 shadow-dropdown rounded-lg z-50 overflow-y-scroll">
          {items?.map((item) => (
            <div
              key={item.val}
              className="px-2 py-3 text-slate text-sm hover:bg-[#F8FAFC] cursor-pointer block"
              // {...props}
              onClick={() => {
                onChange(item.val); // notify React Hook Form
                setOpen(false);
              }}
            >
              {item.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CPselect;

// 'NIGERIA', 'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France', 'India', 'Singapore', 'Remote' or 'Other'"
