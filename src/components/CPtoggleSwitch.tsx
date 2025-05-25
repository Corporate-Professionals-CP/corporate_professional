"use client";
import React, { useEffect, useState } from "react";

function CPtoggleSwitch({
  selected = false,
  value = "",
  ...props
}: {
  selected?: boolean;
  value?: string;
}) {
  const [enabled, setEnabled] = useState(selected);
  useEffect(() => {
    setEnabled(selected);
  }, [selected]);
  return (
    <label className="inline-flex items-center cursor-pointer">
      {/* Hidden checkbox */}
      <input
        type="radio"
        className="sr-only"
        checked={enabled}
        onChange={() => setEnabled(!enabled)}
        value={value}
        {...props}
      />
      {/* Switch background */}
      <div
        className={`w-11 h-6 flex items-center rounded-full p-1 duration-300 ${
          enabled ? "bg-primary" : "bg-gray-300"
        }`}
      >
        {/* Switch knob */}
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
            enabled ? "translate-x-5" : "translate-x-0"
          }`}
        ></div>
      </div>
    </label>
  );
}

export default CPtoggleSwitch;
