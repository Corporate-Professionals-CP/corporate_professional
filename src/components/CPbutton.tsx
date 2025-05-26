import { ArrowIcon } from "@/imagecomponents";
import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

function CPbutton({
  loading = false,
  ...props
}: { loading?: boolean } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`rounded-full p-[15] text-center block w-full  text-white mb-4 text-sm ${
        loading ? "bg-[#b5b7ff]" : "bg-primary"
      }`}
      disabled={loading}
      {...props}
    >
      {props.children ? props.children : "Continue"}
    </button>
  );
}

export const CPbuttonTwo = ({
  children = "Join Us",
  className = "",
  link = "",
  arrowColor = "#fff",
  ...props
}: {
  className?: string;
  link?: string;
  arrowColor?: string;
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  if (link) {
    return (
      <Link
        href={link}
        className={`bg-[#282A74] text-white text-sm px-6 py-3 rounded-full font-medium flex items-center justify-center gap-1 ${className}`}
        style={props.style}
      >
        {children}
        <ArrowIcon color={arrowColor} />
      </Link>
    );
  }
  return (
    <button
      className={`bg-[#282A74] text-white text-sm px-6 py-3 rounded-full font-medium flex items-center justify-center gap-1 ${className}`}
      {...props}
    >
      {children}
      <ArrowIcon />
    </button>
  );
};

export const CPbuttonThree = () => {
  return (
    <button className="border border-[#282A74] bg-transparent text-[#282A74] text-sm px-6 py-3 rounded-full font-medium ">
      Learn more
    </button>
  );
};

export default CPbutton;
