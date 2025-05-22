import Image, { StaticImageData } from "next/image";
import React from "react";
import { prof1, prof2, prof3, prof4, prof5 } from "@/assets";

const Professional = () => {
  return (
    <section className="pt-[123] ">
      <div className="max-w-[940] m-auto mb-[64]">
        <h3 className="text-primary">How they use it</h3>
        <p className="text-[#050505] font-medium text-[39px]">
          Meet our Professionals
        </p>
      </div>
      <div className="w-full h-[482] flex gap-5 overflow-x-scroll">
        <Person active img={prof1} />
        <Person img={prof2} />
        <Person img={prof3} />
        <Person img={prof4} />
        <Person img={prof5} />
      </div>
    </section>
  );
};

const Person = ({
  active = false,
  img,
}: {
  active?: boolean;
  img: StaticImageData;
}) => {
  return (
    <div className="w-[300] shrink-0">
      <div className=" h-[300] p-2 bg-white rounded-lg mb-4">
        <Image
          src={img}
          alt={"prof1"}
          className="rounded-lg w-full object-cover"
        />
      </div>
      {active && (
        <div className="p-3 bg-white rounded-2xl">
          <div className=" text-primary mb-10 ">
            I connect with industry leaders, stay updated on trends, and find
            mentorship to grow my career.
          </div>
          <div>
            <p className="text-[#020617] mb-0.5">Aisha</p>
            <p className="text-[#64748B] ">Marketing Manager</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Professional;
