import React, { ButtonHTMLAttributes } from "react";

function CPsmallButton({
  text,
  loading = false,
  ...props
}: {
  text: string;
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={` py-3 px-6 rounded-full text-white font-medium ${
        loading ? "bg-[#b5b7ff]" : "bg-primary"
      }`}
    >
      {text}
    </button>
  );
}

export default CPsmallButton;
