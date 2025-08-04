import Link from "next/link";
import React, { ButtonHTMLAttributes } from "react";
import CPspinnerLoader from "./CPspinnerLoader";

function CPsmallButton({
  text,
  loading = false,
  isLink = undefined,
  ...props
}: {
  text?: string;
  loading?: boolean;
  isLink?: string | undefined;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  if (isLink) {
    return (
      <Link
        href={isLink}
        className={`py-3 px-6 rounded-full text-white font-medium bg-primary ${props.className}`}
        style={props.style}
      >
        {text}
        {props.children}
      </Link>
    );
  }
  return (
    <button
      {...props}
      className={` py-3 px-6 rounded-full text-white font-medium flex items-center gap-1 cursor-pointer ${
        loading ? "bg-[#b5b7ff]" : "bg-primary"
      }`}
      disabled={loading}
    >
      {loading && <CPspinnerLoader size={15} color="#ffffff" />}

      {text}
      {props.children}
    </button>
  );
}

export default CPsmallButton;
