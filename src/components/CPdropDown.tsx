"use client";
import MoreIcon from "@/imagecomponents/MoreIcon";
import React, { useEffect, useRef, useState } from "react";

function CPdropDown() {
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
    <div className="relative" ref={dropdownRef}>
      <button
        className="bg-[#F8FAFC] w-6 h-6 rounded-full grid place-content-center"
        onClick={() => setOpen((s) => !s)}
      >
        <MoreIcon />
      </button>
      {open && (
        <div className="p-1 rounded-lg min-w-[187] absolute shadow-dropdown right-0 top-8 bg-white">
          <p className="text-[#020617] text-sm py-3 px-2 hover:bg-[#F8FAFC]">
            Edit Profile
          </p>
          <p className="text-[#020617] text-sm py-3 px-2  hover:bg-[#F8FAFC]">
            Print profile
          </p>
        </div>
      )}
    </div>
  );
}

export default CPdropDown;
