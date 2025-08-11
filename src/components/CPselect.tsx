"use client";
import DropDownIcon from "@/imagecomponents/DropDownIcon";
import { useEffect, useRef, useState } from "react";

type CPselectType = {
  className?: string;
  placeholder?: string;
  error?: string;
  items?: { text: string; val: string }[];
  value?: string;
  onChange?: (e: string) => void;
  search?: boolean;
};

function CPselect({
  className = "",
  error = "",
  placeholder = "Select here",
  items,
  value,
  search = false,
  onChange = () => {},
}: CPselectType) {
  const [open, setOpen] = useState(false);
  const [openUpward, setOpenUpward] = useState(false);
  const [searchval, setsearchval] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  // Check if dropdown should open upward
  const checkPosition = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const dropdownHeight = 300; // max height

      // Check if there's enough space below
      const spaceBelow = viewportHeight - rect.bottom;
      const spaceAbove = rect.top;

      // Open upward if there's not enough space below but enough above
      setOpenUpward(spaceBelow < dropdownHeight && spaceAbove > dropdownHeight);
    }
  };

  useEffect(() => {
    if (open) {
      checkPosition();
    }
  }, [open]);

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
  const filteredItems = items?.filter(
    (el) =>
      el.text.toLowerCase().includes(searchval.toLowerCase()) ||
      el.val.toLowerCase().includes(searchval.toLowerCase())
  );
  return (
    <div className="w-full relative" ref={dropdownRef}>
      <div
        ref={triggerRef}
        className={`w-full min-h-[45px] relative bg-[#F8FAFC] px-4 py-3.5 text-sm text-slate rounded-lg cursor-pointer ${className}`}
        onClick={() => setOpen((s) => !s)}
      >
        {items?.find((v) => v.val == value)?.text || (
          <span className="text-[#64748B]">{placeholder}</span>
        )}
        <div className="absolute right-4 top-3.5 rotate-180">
          <DropDownIcon />
        </div>
      </div>
      {error && <p className="text-[#E62E2E] text-sm mt-1.5 mb-0">{error}</p>}
      {open && (
        <div
          className={`min-w-[223px] min-h-[200px] max-h-[300px] bg-white absolute shadow-dropdown rounded-lg z-[9999] overflow-y-scroll ${
            openUpward ? "bottom-16" : "top-16"
          }`}
        >
          {search && (
            <input
              type=""
              value={searchval}
              onChange={(e) => setsearchval(e.target.value)}
              className="border rounded-[3px] w-full p-1 border-[#aaa]"
            />
          )}

          {filteredItems?.map((item) => (
            <div
              key={item.val}
              className="px-2 py-3 text-slate text-sm hover:bg-[#F8FAFC] cursor-pointer block"
              onClick={() => {
                onChange(item.val);
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
