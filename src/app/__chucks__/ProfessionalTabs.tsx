"use client";
import { useState } from "react";
import { CPbuttonTwo } from "@/components/CPbutton";
import Image from "next/image";
import mockup1 from "@/assets/mock1.png";
import mockup2 from "@/assets/mock2.png";
import mockup3 from "@/assets/mock3.png";
import mockup4 from "@/assets/mock4.png";

const proccurr = [
  {
    name: "Professional Profiles",
    text: "Build a profile that showcases your skills, experience, and achievements to the right people.",
    image: mockup1,
  },
  {
    name: "Searchable Directory",
    text: "Find exactly who you're looking for with advanced filtering by industry, role, experience level, skills, and more.",
    image: mockup2,
  },
  {
    name: "Job & Content Feed",
    text: "Manage your visibility—show your full profile or stay private while remaining discoverable.",
    image: mockup3,
  },
  {
    name: "Professional Profiles",
    text: "Build a profile that showcases your skills, experience, and achievements to the right people.",
    image: mockup4,
  },
];

const ProfessionalTabs = () => {
  const [activetab, setActivetab] = useState(0);

  return (
    <>
      <section
        id="profiles"
        className="pt-[155] max-w-[988] m-auto mb-[12] px-6"
      >
        <div className="p-2 rounded-full border-[#282A74] border flex justify-between mb-6 max-md:hidden ">
          <button
            className={`w-[221] text-center ${
              activetab == 0 ? "bg-[#282A74] text-white " : "text-[#050505]"
            }  rounded-full p-3`}
            onClick={() => setActivetab(0)}
          >
            Professional Profiles
          </button>
          <button
            className={`w-[221] text-center ${
              activetab == 1 ? "bg-[#282A74] text-white " : "text-[#050505]"
            } rounded-full p-3`}
            onClick={() => setActivetab(1)}
          >
            Searchable Directory
          </button>
          <button
            className={`w-[221] text-center ${
              activetab == 2 ? "bg-[#282A74] text-white " : "text-[#050505]"
            }  rounded-full p-3`}
            onClick={() => setActivetab(2)}
          >
            Job & Content Feed
          </button>
          <button
            className={`w-[221] text-center ${
              activetab == 3 ? "bg-[#282A74] text-white " : "text-[#050505]"
            }  rounded-full p-3`}
            onClick={() => setActivetab(3)}
          >
            Professional Profiles
          </button>
        </div>
        <div className="bg-[#F8FAFC] pt-10  px-[103] rounded-2xl careershadow max-md:hidden ">
          <div className=" text-center mb-[72] flex flex-col items-center w-[460] m-auto">
            <p className="mb-6">{proccurr[activetab].text}</p>
            <CPbuttonTwo className="bg-primary" disabled>
              {" "}
              Learn more
            </CPbuttonTwo>
          </div>
          <div className="w-full bg-white h-[290] ">
            <Image
              src={proccurr[activetab].image}
              alt="mock up"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <ProfessionalInput />
      </section>
    </>
  );
};

function ProfessionalInput() {
  return proccurr.map((prof, i) => {
    return (
      <div
        className="bg-[#F8FAFC] pt-10  px-6 rounded-2xl hidden max-md:block mb-[22px] careershadow"
        key={i}
      >
        <div className=" text-center mb-[72] flex flex-col items-center w-max-[460] m-auto">
          <h3 className="text-[#050505] font-medium text-lg mb-4">
            {prof.name}
          </h3>
          <p className="mb-6 text-[#334155]">{prof.text}</p>
          <CPbuttonTwo className="bg-primary" disabled={true}>
            {" "}
            Learn more
          </CPbuttonTwo>
        </div>
        <div className="w-full bg-white h-[290]">
          <Image
            src={prof.image}
            alt="mock up"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  });
}

export default ProfessionalTabs;
