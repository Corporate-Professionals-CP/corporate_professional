import { LeftArrow } from "@/imagecomponents";
import Link from "next/link";
import React from "react";

function CPdashboardBack({
  title = "",
  link = "/dashboard",
  className = "",
  style = {},
}: {
  title?: string;
  link?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`mb-[18] px-6 py-5  border-b border-[#E2E8F0] text-slate font-medium flex items-center gap-6 ${className}`}
      style={style}
    >
      <Link href={link}>
        <LeftArrow />
      </Link>
      <span className="text-lg">{title}</span>
    </div>
  );
}

export default CPdashboardBack;
