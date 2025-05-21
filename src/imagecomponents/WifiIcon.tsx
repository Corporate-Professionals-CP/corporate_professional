import React from "react";

function WifiIcon({ color = "#020617" }: { color?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 26V25C17 19.4772 12.5228 15 7 15H6M6 6H7C17.4934 6 26 14.5066 26 25V26M8 25C8 25.5523 7.55228 26 7 26C6.44772 26 6 25.5523 6 25C6 24.4477 6.44772 24 7 24C7.55228 24 8 24.4477 8 25Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default WifiIcon;
