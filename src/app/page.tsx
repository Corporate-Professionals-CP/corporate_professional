"use client";
import Image from "next/image";
import CPheader from "@/components/CPheader";
import { CPbuttonThree, CPbuttonTwo } from "@/components/CPbutton";
import CPpartners from "@/components/CPpartners";
import connectpeople from "@/assets/connectpeople.png";

// import bgimg from "@/assets/dashboardbg.svg";
import {
  fashPhoto,
  person,
  person2,
  person3,
  person4,
  person5,
  proddesign,
} from "@/assets";
import { MapIcon, PeopleIcon, StartIcon } from "@/imagecomponents";
import HeartIcon from "@/imagecomponents/HeartIcon";
// import ProfessionalTabs from "./__chucks__/ProfessionalTabs";
import NetWorking from "./__chucks__/Networking";
import WhyJoin from "./__chucks__/WhyJoin";
import Professional from "./__chucks__/Professional";
import Footer from "./__chucks__/Footer";

export default function Home() {
  return (
    <>
      <CPheader />
      <main>
        <Empowering />
        <CPpartners />
        <WhyJoin />
        <section className="px-[75] mb-[150]">
          <Image
            src={connectpeople}
            alt="connect"
            className="w-full object-cover"
          />
        </section>
        <NetWorking />
        <SuccesfulCareer />
        <section className="bg-primary pt-[134] pb-[133] text-white text-center px-6">
          <div className="max-w-[960] m-auto">
            <p className="mb-5">TC&P IN A NUTSHELL</p>
            <p className="text-[39px] mb-10 max-sm:text-[30px]">
              TC&P is a global network 🌍 connecting professionals 🤝,
              supporting growth 📈, and providing career opportunities through
              mentorship, resources, and expert-led programs 🎓.
            </p>
            <p className="flex justify-center items-center gap-2 max-sm:flex-col">
              <div className="flex  gap-1">
                <StartIcon />
                <StartIcon />
                <StartIcon />
                <StartIcon />
                <StartIcon />
              </div>
              <span className="translate-y-[3px]">
                Reviews from Professionals
              </span>
            </p>
          </div>
        </section>
        {/* <ProfessionalTabs /> */}
        <Professional />
        <Building />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
const Empowering = () => {
  return (
    <section className="pt-[132] blurbackground pb-24">
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
          <CPbuttonThree />
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
const SuccesfulCareer = () => {
  return (
    <section className="max-w-[1008] m-auto mb-[150] px-6 max-sm:mb-[77px] ">
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

const Building = () => {
  return (
    <section className="pt-[161] max-w-[988] m-auto mb-[12] px-6">
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

const FAQ = () => {
  return (
    <section className="mt-[180] mb-[152] px-6">
      <div className="max-w-[522] m-auto">
        <h3 className="text-[39px] font-medium leading-[1.2] text-center mb-8">
          Frequently asked <br /> Questions
        </h3>
        <ul className="flex flex-col gap-4">
          {[
            "Is TC&P free to use?",
            "Who can join TC&P?",
            "How do I find and connect with professionals?",
            "Can I post job opportunities?",
            "How does TC&P protect my privacy?",
            "What makes TC&P different from other professional networks?",
          ].map((val) => {
            return (
              <li
                key={val}
                className="py-4 px-6 border-[#E2E8F0] border rounded-2xl bg-[#F8FAFC] flex  items-center justify-between"
              >
                <span> {val}</span> <span className="font-medium">+</span>
              </li>
            );
          })}
        </ul>
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
