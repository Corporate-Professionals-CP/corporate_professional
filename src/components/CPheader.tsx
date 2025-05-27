import Image from "next/image";
import React, { useState } from "react";

import { CPbuttonTwo } from "./CPbutton";
import Link from "next/link";
import { CloseIcon, HamburgerIcon } from "@/imagecomponents";
import { cplogo, logosignblue } from "@/assets";
function CPheader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="border-b border-[#E2E8F0]">
      <nav
        className="flex py-5 max-w-[820] mx-auto justify-between items-center px-2.5 max-md:hidden
    "
      >
        <ul className="flex gap-3 items-center  ">
          <li>
            <Image src={cplogo} alt="logo" />
          </li>
          <div className="flex gap-3 items-center ">
            <li className="p-2">Home</li>
            <li className="p-2">Why us?</li>
            <li className="p-2">Feaure</li>
            <li className="p-2">How it works</li>
          </div>
        </ul>
        <div className="flex gap-2 max-md:hidden ">
          <Link
            href={"/login"}
            className="px-6 py-3 font-medium  text-sm text-[#050505]"
          >
            Login
          </Link>
          <CPbuttonTwo link="/onboarding" />
        </div>
      </nav>
      <nav
        className=" py-5 max-w-[820] mx-auto justify-between items-center px-6 hidden max-md:flex relative
    "
      >
        <Image src={logosignblue} alt="logo" />
        <div className="flex">
          <CPbuttonTwo link="/onboarding" />
          <button
            onClick={toggleMenu}
            className="md:hidden ml-2 rounded-full w-11 h-11 grid place-content-center bg-gray-100"
          >
            {isOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden px-4 pb-4 absolute top-16 right-6">
            <div className="mt-2 bg-white rounded-xl shadow-md py-2 space-y-2 pl-8 text-right">
              <Link href="#" className="block px-4 py-2 text-sm">
                Home
              </Link>
              <Link href="#" className="block px-4 py-2 text-sm">
                Why us?
              </Link>
              <Link href="#" className="block px-4 py-2 text-sm">
                Features
              </Link>
              <Link href="#" className="block px-4 py-2 text-sm">
                How it works
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default CPheader;
