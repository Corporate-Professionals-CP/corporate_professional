import Link from "next/link";
import React, { ButtonHTMLAttributes } from "react";

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
        className={" py-3 px-6 rounded-full text-white font-medium bg-primary"}
      >
        {text}
        {props.children}
      </Link>
    );
  }
  return (
    <button
      {...props}
      className={` py-3 px-6 rounded-full text-white font-medium ${
        loading ? "bg-[#b5b7ff]" : "bg-primary"
      }`}
      disabled={loading}
    >
      {text}
      {props.children}
    </button>
  );
}

export default CPsmallButton;
