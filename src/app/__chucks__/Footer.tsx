import { earth } from "@/assets";
import { CPbuttonTwo } from "@/components/CPbutton";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/imagecomponents";
import Image from "next/image";
import React from "react";
import logosign from "@/assets/logosign.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="pt-[64] bg-gradient-to-b from-[#282A74] to-slate  flex justify-center px-6">
        <div className="w-[857] flex flex-col items-center">
          <div className="text-white flex items-center gap-4">
            <span>DISCOVER</span>
            <Image src={logosign} alt="logo sign" />
          </div>
          <h3 className="text-white text-[60px] leading-[1.2] text-center mb-7 mt-4 max-sm:text-[24px] font-medium">
            Making connections in the corporate world easier
          </h3>
          <CPbuttonTwo
            className="bg-white text-[#050505]"
            style={{ color: "#050505" }}
            link="/onboarding"
            arrowColor="#050505"
          >
            Join us
          </CPbuttonTwo>
          <Image src={earth} alt="earth" className="w-full mt-[126]" />
        </div>
      </div>
      <div className="bg-slate flex justify-center gap-10 text-white p-[56] max-md:flex-col max-md:px-6">
        <div className="w-[450] h-[488] flex flex-col max-md:h-auto  max-md:w-auto">
          <Image
            src={"/logo-white-full.svg"}
            width={150}
            height={30}
            alt="log"
            className="mb-8 max-sm:mb-8"
          />
          <p className="text-[#FFFFFFB2] text-sm mb-4">
            The Corporates and Professionals platform helps members grow through
            expert programs, valuable resources, and meaningful networking.
          </p>
          <p className="flex-1 text-white text-xs">More about us</p>
          <div className="flex justify-between items-end max-md:mt-[80px] ">
            <div className="grid grid-cols-2 gap-[10] ">
              <Social Icon={<YoutubeIcon />} />
              <Social Icon={<LinkedinIcon />} />
              <Social Icon={<FacebookIcon />} />
              <Social Icon={<TwitterIcon />} />
              <Social Icon={<InstagramIcon />} />
            </div>
            <div className="text-sm text-[#FFFFFFB2] text-right">
              © 2025 — Copyright <br />
              All Rights reserved
            </div>
          </div>
        </div>
        <div className="w-[450] flex flex-col max-md:w-auto max-md:gap-[123px]">
          <div className="flex gap-10 flex-1 max-sm:gap-6">
            <p>
              <Link href="#home">Home</Link>
            </p>
            <p>
              <Link href="#why-join">Why us?</Link>
            </p>
            <p>
              <Link href="#networking">Features.</Link>
            </p>
            <p>
              <Link href="#footer">Contact.</Link>
            </p>
          </div>
          <div>
            <div className="mb-12">
              <h4 className="mb-4">Contact us</h4>
              <p className="text-[#FFFFFFB2] text-sm">07479648276</p>
              <p className="text-[#FFFFFFB2] text-sm">
                info@corporatesandprofessionals.com
              </p>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <h4 className="mb-4">Location</h4>
                <p className="text-[#FFFFFFB2] text-sm">London</p>
                <p className="text-[#FFFFFFB2] text-sm">United Kingdom</p>
              </div>
              <div className="text-right">
                <h4 className="mb-4">Languages</h4>

                <p className="text-[#FFFFFFB2] text-sm flex gap-5">
                  <span>En</span>
                  <span>Es</span>
                  <span>Fr</span>
                  <span>De</span>
                  <span>Ru</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

function Social({
  className = "",
  Icon,
}: {
  className?: string;
  Icon: React.JSX.Element;
}) {
  return (
    <div
      className={`w-[40] h-[40] rounded-full bg-white grid place-content-center ${className}`}
    >
      {Icon}
    </div>
  );
}

export default Footer;
