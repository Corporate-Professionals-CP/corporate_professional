import React from "react";
import { MapIcon, PeopleIcon } from "@/imagecomponents";
import HeartIcon from "@/imagecomponents/HeartIcon";

const SuccesfulCareer = () => {
  return (
    <section
      id="successful-career"
      className="max-w-[1008] m-auto mb-[150] px-6 max-sm:mb-[77px] "
    >
      <h2 className="text-center font-medium text-[39px] text-[#050505] leading-[1.2] mb-6 max-sm:text-[24px]">
        What is behind every <br /> successful career?
      </h2>
      <p className="text-[#64748B] text-center mb-[56]">
        Spoiler: The Corporates and Professionals Platform!
      </p>
      <div className="grid grid-cols-3 gap-5 max-sm:grid-cols-1">
        <div className="p-6 h-[213] flex flex-col justify-between items-start careershadow">
          <HeartIcon />
          <p>People who’ve supported by a network</p>
        </div>
        <div className="p-6 h-[213] flex flex-col justify-between items-start careershadow">
          <MapIcon />
          <p>People who’ve supported by a network</p>
        </div>
        <div className="p-6 h-[213] flex flex-col justify-between items-start careershadow">
          <PeopleIcon />
          <p>People who’ve supported by a network</p>
        </div>
      </div>
    </section>
  );
};

export default SuccesfulCareer;
