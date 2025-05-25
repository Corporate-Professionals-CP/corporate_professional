import React from "react";

function BookmarkIcon({
  size = "32",
  color = "#020617",
  active = false,
}: {
  size?: string;
  color?: string;
  active?: boolean;
}) {
  if (active) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 14 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.26685 1.14784C3.81978 0.967619 5.3992 0.875 7 0.875C8.6008 0.875 10.1802 0.967619 11.7332 1.14784C12.981 1.29266 13.875 2.36435 13.875 3.58916V16.5C13.875 16.7166 13.7628 16.9178 13.5786 17.0317C13.3943 17.1455 13.1642 17.1559 12.9705 17.059L7 14.0738L1.02951 17.059C0.835766 17.1559 0.605678 17.1455 0.421418 17.0317C0.237158 16.9178 0.125 16.7166 0.125 16.5V3.58916C0.125 2.36435 1.01903 1.29265 2.26685 1.14784Z"
          fill="#7074FF"
        />
      </svg>
    );
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.4578 4.42988C24.9252 4.60018 26 5.86533 26 7.34265V28L16 23L6 28V7.34265C6 5.86533 7.07477 4.60018 8.54224 4.42988C10.9887 4.14595 13.4773 4 16 4C18.5227 4 21.0113 4.14595 23.4578 4.42988Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default BookmarkIcon;
