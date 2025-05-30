import React from "react";

const Building = () => {
  return (
    <section
      id="build-profile"
      className="pt-[161] max-w-[988] m-auto mb-[12] px-6"
    >
      <div className="max-w-[940] m-auto mb-[64]">
        <h3 className="text-primary mb-4">HOW IT WORKS</h3>
        <p className="text-[#050505] font-medium text-[39px] leading-[1.2]">
          Building Your <br /> Professional Presence
        </p>
      </div>
      <div className="flex gap-[18] flex-wrap justify-center">
        <BuildingPart
          active
          no="1"
          title="Create Your Profile"
          desc="Complete your profile with structured fields that highlight your expertise & accomplishment"
        />
        <BuildingPart
          no="2"
          title="Discover Professionals"
          desc="Search our directory to find peers, mentors, and industry leaders filtered by your specific criteria."
        />
        <BuildingPart
          no="3"
          title="Engage With Content"
          desc="Follow relevant industries to see job postings and professional updates tailored to your interests."
        />
        <BuildingPart
          no="4"
          title="Grow Your Network"
          desc="Connect at our events and through the platform to build meaningful professional relationships."
        />
      </div>
    </section>
  );
};

const BuildingPart = ({
  active = false,
  no,
  title,
  desc,
}: {
  active?: boolean;
  no: string;
  title: string;
  desc: string;
}) => {
  return (
    <div
      className={`w-[221] px-[16] py-[24] max-sm:w-full ${
        active ? "bg-primary" : "bg-[#F8FAFC]"
      } rounded-2xl ${active ? "text-white" : "#475569"} careershadow`}
    >
      <div className="w-[40] h-[40] rounded-[8] bg-[#282A74] text-white flex justify-center items-center mb-[78] ">
        {no}
      </div>
      <p
        className={`font-medium text-[18px] mb-[16] ${
          active ? "text-white" : "#020617"
        }`}
      >
        {title}
      </p>
      <p>{desc}</p>
    </div>
  );
};

export default Building;
