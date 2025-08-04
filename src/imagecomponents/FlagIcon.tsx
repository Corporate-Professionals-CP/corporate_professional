import React from "react";

function FlagIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path fill="#fff" d="M0 0h24v24H0z" />
      <g filter="url(#a)">
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 21v-5m0 0V6.5c1-1 2.5-1.5 4-1.5 3 0 5 2.5 9 .5v10c-4 2-6-1-9-1-1 0-3 .5-4 1.5Z"
        />
      </g>
      <defs>
        <filter
          id="a"
          width={16}
          height={19}
          x={3}
          y={4.5}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={0.5} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_15_295"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_15_295"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default FlagIcon;
