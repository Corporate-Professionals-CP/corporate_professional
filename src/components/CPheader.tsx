import Image from "next/image";
import React from "react";
import cplogo from "@/assets/cplogo.svg";
import { CPbuttonTwo } from "./CPbutton";
import Link from "next/link";
function CPheader() {
  return (
    <div className="border-b border-[#E2E8F0]">
      <nav
        className="flex py-5 max-w-[820] mx-auto justify-between items-center px-2.5
    "
      >
        <ul className="flex gap-3 items-center ">
          <li>
            <Image src={cplogo} alt="logo" />
          </li>
          <div className="flex gap-3 items-center max-md:hidden">
            <li className="p-2">Home</li>
            <li className="p-2">Why us?</li>
            <li className="p-2">Feaure</li>
            <li className="p-2">How it works</li>
          </div>
        </ul>
        <div className="flex gap-2  ">
          <Link
            href={"/login"}
            className="px-6 py-3 font-medium  text-sm text-[#050505]"
          >
            Login
          </Link>
          <CPbuttonTwo link="/onboarding" />
        </div>
      </nav>
    </div>
  );
}

export default CPheader;
