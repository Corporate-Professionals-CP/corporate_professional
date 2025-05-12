"use client";
import Image, { StaticImageData } from "next/image";
import CPheader from "@/components/CPheader";
import image from "@/assets/Image.png";
import image2 from "@/assets/Image2.png";
import image3 from "@/assets/Image3.png";
import image4 from "@/assets/Image4.png";
import image5 from "@/assets/Image5.png";
import { CPbuttonThree, CPbuttonTwo } from "@/components/CPbutton";
import CPpartners from "@/components/CPpartners";
import connectpeople from "@/assets/connectpeople.png";
import earth from "@/assets/earth.png";
import { useState } from "react";
import {
  fashPhoto,
  insight,
  person,
  person2,
  person3,
  person4,
  person5,
  proddesign,
  prof1,
  prof2,
  prof3,
  prof4,
  prof5,
  shake,
} from "@/assets";
import { MapIcon, PeopleIcon, StartIcon } from "@/imagecomponents";
import HeartIcon from "@/imagecomponents/HeartIcon";

export default function Home() {
  return (
    <>
      <CPheader />
      <main>
        <section className="flex flex-col items-center pt-[132]">
          <ActiveMember />
          <h1 className="text-[#050505] text-5xl font-medium text-center">
            Empowering Professionals, <br />{" "}
            <div className="text-white bg-primary rounded-lg p-2 relative -z-1 -rotate-2 -translate-[3px]">
              <div className="rotate-2 translate-[3px]">
                Connecting Opportunities
              </div>
            </div>
          </h1>
          <p className="max-w-[460] text-center text-[#334155] text-lg mt-5 mb-8">
            Join a global network of corporate professionals. Learn, grow, and
            build meaningful connections.
          </p>
          <div className="flex gap-3">
            <CPbuttonTwo />
            <CPbuttonThree />
          </div>
          <div className="mt-[122] flex justify-center">
            <Image src={fashPhoto} alt="fash photo" className="w-[288]" />
            <Image
              src={proddesign}
              alt="fash photo"
              className="w-[288] -ml-[125px] -translate-y-3.5"
            />
          </div>
        </section>
        <CPpartners />
        <section className="flex gap-5 items-end justify-center mb-20">
          <div className="w-[460]">
            <h3 className="text-primary ">Why Join Us?</h3>
            <p className="text-[#050505 text-[32px] font-medium leading-[1.2]">
              We are building the Largest Global Network of Corporate
              Professionals
            </p>
          </div>
          <div className="w-[460]">
            <p className="text-[#334155] mb-6">
              A space for connectivity, growth, and innovation in the corporate
              sector.
            </p>
            <CPbuttonTwo style={{ width: 300 }}>Join us</CPbuttonTwo>
          </div>
        </section>
        <section className="px-[75] mb-[150]">
          <Image
            src={connectpeople}
            alt="connect"
            className="w-full object-cover"
          />
        </section>
        <NetWorking />
        <SuccesfulCareer />
        <section className="bg-primary pt-[134] pb-[133] text-white text-center">
          <div className="max-w-[960] m-auto">
            <p className="mb-5">TC&P IN A NUTSHELL</p>
            <p className="text-[39px] mb-10">
              TC&P is a global network 🌍 connecting professionals 🤝,
              supporting growth 📈, and providing career opportunities through
              mentorship, resources, and expert-led programs 🎓.
            </p>
            <p className="flex justify-center items-center gap-2">
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
        <ProfessionalTabs />
        <Professional />
        <Building />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

const Pellet = () => {
  return (
    <div className="py-2 px-[18] text-xs rounded-full text-[#020617] bg-white shrink-0 ">
      Project Manager
    </div>
  );
};

const NetWorking = () => {
  return (
    <section className="max-w-[960] m-auto mb-[150]">
      <h2 className="text-center font-medium text-[39px] text-[#050505] leading-[1.2] mb-10">
        Our community goes beyond <br /> simple networking
      </h2>
      <div className="flex justify-between">
        <div className="max-w-[460]">
          <div className="bg-[#F8FAFC] mb-5 pb-10 rounded-2xl">
            <div className="p-6">
              <h4 className="font-medium text-[#020617] mb-2">
                Unlock Opportunities
              </h4>
              <p className="text-[#475569">
                Discover jobs, internships, and professional development
                resources.
              </p>
            </div>
            <div className="flex gap-4 mb-5 overflow-x-auto">
              <Pellet /> <Pellet /> <Pellet /> <Pellet /> <Pellet /> <Pellet />
              <Pellet />
            </div>
            <div className="flex gap-4 mb-8 overflow-x-auto">
              <Pellet /> <Pellet /> <Pellet /> <Pellet />
            </div>
          </div>
          <div className="bg-[#F8FAFC] rounded-2xl">
            <div className="p-6">
              <h4 className="font-medium text-[#020617] mb-2">
                Gain Valuable Insights
              </h4>
              <p className="text-[#475569 mb-6">
                Access mentorship, leadership training, and industry talks.
              </p>
              <Image src={insight} alt="insight" />
            </div>
          </div>
        </div>
        <div className="bg-primary text-white max-w-[460] rounded-2xl p-6">
          <h4 className="mb-2">Expand Your Network</h4>
          <p className="mb-6">
            Connect with professionals who share your interests and goals
            through structured networking opportunities
          </p>
          <Image src={shake} alt="expand network" className="rounded-lg" />
        </div>
      </div>
      <div className="mt-5 bg-[#F8FAFC] p-6 rounded-2xl">
        <h4 className="font-medium text-[#020617] mb-2">Expert-Led Programs</h4>
        <p className="text-[#475569 mb-6">
          Access workshops, courses, and events led by industry leaders who
          share practical insights you won&apos;t find elsewhere.
        </p>
        <textarea
          placeholder="mockup"
          className="bg-white w-full h-40 p-4"
        ></textarea>
      </div>
      <div className="flex justify-center mt-16">
        <CPbuttonTwo style={{ width: 300 }}> Create Your Profile </CPbuttonTwo>
      </div>
    </section>
  );
};

const SuccesfulCareer = () => {
  return (
    <section className="max-w-[960] m-auto mb-[150]">
      <h2 className="text-center font-medium text-[39px] text-[#050505] leading-[1.2] mb-6">
        What is behind every <br /> successful career?
      </h2>
      <p className="text-[#64748B] text-center mb-[56]">
        Spoiler: The Corporates and Professionals Platform!
      </p>
      <div className="grid grid-cols-3 gap-5">
        <div className="p-6 h-[213] flex flex-col justify-between items-start">
          <HeartIcon />
          <p>People who’ve supported by a network</p>
        </div>
        <div className="p-6 h-[213] flex flex-col justify-between items-start">
          <MapIcon />
          <p>People who’ve supported by a network</p>
        </div>
        <div className="p-6 h-[213] flex flex-col justify-between items-start">
          <PeopleIcon />
          <p>People who’ve supported by a network</p>
        </div>
      </div>
    </section>
  );
};

const ProfessionalTabs = () => {
  const [activetab, setActivetab] = useState("professional");
  return (
    <section className="pt-[155] max-w-[940] m-auto mb-[12">
      <div className="p-2 rounded-full border-[#282A74] border flex justify-between mb-6 ">
        <button
          className={`w-[221] text-center ${
            activetab == "professional"
              ? "bg-[#282A74] text-white "
              : "text-[#050505]"
          }  rounded-full p-3`}
        >
          Professional Profiles
        </button>
        <button
          className={`w-[221] text-center ${
            activetab == "searchable"
              ? "bg-[#282A74] text-white "
              : "text-[#050505]"
          } rounded-full p-3`}
        >
          Searchable Directory
        </button>
        <button
          className={`w-[221] text-center ${
            activetab == "job" ? "bg-[#282A74] text-white " : "text-[#050505]"
          }  rounded-full p-3`}
        >
          Job & Content Feed
        </button>
        <button
          className={`w-[221] text-center ${
            activetab == "profiles"
              ? "bg-[#282A74] text-white "
              : "text-[#050505]"
          }  rounded-full p-3`}
        >
          Professional Profiles
        </button>
      </div>
      <div className="bg-[#F8FAFC] pt-10  px-[103] rounded-2xl">
        <div className=" text-center mb-[72] flex flex-col items-center w-[460] m-auto">
          <p className="mb-6">
            Build a profile that showcases your skills, experience, and
            achievements to the right people.
          </p>
          <CPbuttonTwo className="bg-primary"> Learn more</CPbuttonTwo>
        </div>
        <div className="w-full bg-white h-[290]"></div>
      </div>
    </section>
  );
};

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

const Building = () => {
  return (
    <section className="pt-[161] max-w-[940] m-auto mb-[12">
      <div className="max-w-[940] m-auto mb-[64]">
        <h3 className="text-primary mb-4">HOW IT WORKS</h3>
        <p className="text-[#050505] font-medium text-[39px] leading-[1.2]">
          Building Your <br /> Professional Presence
        </p>
      </div>
      <div className="flex gap-[18]">
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
      className={`w-[221] px-[16] py-[24] ${
        active ? "bg-primary" : "bg-[#F8FAFC]"
      } rounded-2xl ${active ? "text-white" : "#475569"} `}
    >
      <div className="w-[40] h-[40] rounded-[8] bg-[#282A74] text-white flex justify-center items-center mb-[78]">
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
    <section className="mt-[180] mb-[152]">
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

const Footer = () => {
  return (
    <footer>
      <div className="pt-[64] bg-gradient-to-b from-[#282A74] to-[#020617]  flex justify-center">
        <div className="w-[857] flex flex-col items-center">
          <div>Discover</div>
          <h3 className="text-white text-[60px] leading-[1.2] text-center mb-7 mt-4">
            Making connections in the corporate world easier
          </h3>
          <CPbuttonTwo className="bg-white " style={{ color: "#050505" }}>
            Join us
          </CPbuttonTwo>
          <Image src={earth} alt="earth" className="w-full mt-[126]" />
        </div>
      </div>
      <div className="bg-[#020617] flex justify-center gap-10 text-white p-[56]">
        <div className="w-[450] h-[488] flex flex-col">
          <p>
            The Corporates and Professionals platform helps members grow through
            expert programs, valuable resources, and meaningful networking.
          </p>
          <p className="flex-1">More about us</p>
          <div className="flex justify-between">
            <div></div>
            <div>
              © 2025 — Copyright <br />
              All Rights reserved
            </div>
          </div>
        </div>
        <div className="w-[450] flex flex-col">
          <div className="flex gap-10 flex-1">
            <p>Home</p>
            <p>Why us?</p>
            <p>Features.</p>
            <p>Contact.</p>
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

const ActiveMember = () => {
  return (
    <div className="flex items-center gap-2 mb-2">
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
