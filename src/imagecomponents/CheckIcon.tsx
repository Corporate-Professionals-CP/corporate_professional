import React from "react";

function CheckIcon({
  size = 24,
  color = "#000",
}: {
  size: number;
  color: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 12.611 8.923 17.5 20 6.5"
      />
    </svg>
  );
}

export default CheckIcon;
