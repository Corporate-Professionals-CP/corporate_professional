import { CPbuttonThree, CPbuttonTwo } from "@/components/CPbutton";
import Image from "next/image";
import React from "react";
import {
  fashPhoto,
  person,
  person2,
  person3,
  person4,
  person5,
  proddesign,
} from "@/assets";

const Empowering = () => {
  return (
    <section id="empowering" className="pt-[132] blurbackground pb-24">
      <div className="flex flex-col items-center  px-6">
        <ActiveMember />
        <h1 className="text-[#050505] text-5xl font-medium text-center max-sm:text-[32px]">
          Empowering Professionals, <br />{" "}
          <div className="text-white bg-primary rounded-lg p-2 relative -z-1 -rotate-2 -translate-[3px]">
            <div className="rotate-2 translate-[3px] max-sm:mx-2.5">
              Connecting Opportunities
            </div>
          </div>
        </h1>
        <p className="max-w-[460] text-center text-[#334155] text-lg mt-5 mb-8">
          Join a global network of corporate professionals. Learn, grow, and
          build meaningful connections.
        </p>
        <div className="flex gap-3 max-sm:flex-col max-sm:w-full max-sm:gap-2">
          <CPbuttonTwo link="/onboarding" />
          <CPbuttonThree disabled={true} />
        </div>
      </div>
      <div className="mt-[122] flex justify-center overflow-x-hidden">
        <Image src={fashPhoto} alt="fash photo" className="w-[288]" />
        <Image
          src={proddesign}
          alt="fash photo"
          className="w-[288] -ml-[125px] -translate-y-3.5"
        />
      </div>
    </section>
  );
};

const ActiveMember = () => {
  return (
    <div className="flex items-center gap-2 mb-2 max-sm:flex-col">
      <div className="flex items-center gap-[-2]">
        <Image
          src={person}
          alt="image"
          className="w-6 h-6 object-cover -mr-[9px] rounded-2xl p-[2] bg-white"
        />
        <Image
          src={person2}
          alt="image"
          className="w-6 h-6 object-cover -mr-[9px] rounded-2xl p-[2] bg-white"
        />
        <Image
          src={person3}
          alt="image"
          className="w-6 h-6 object-cover -mr-[9px] rounded-2xl p-[2] bg-white"
        />
        <Image
          src={person4}
          alt="image"
          className="w-6 h-6 object-cover -mr-[9px] rounded-2xl p-[2] bg-white"
        />
        <Image
          src={person5}
          alt="image"
          className="w-6 h-6 object-cover rounded-2xl p-[2] bg-white"
        />
      </div>
      <span className="text-xs text-[#475569]">
        700+ Members actively managed
      </span>
    </div>
  );
};

export default Empowering;
