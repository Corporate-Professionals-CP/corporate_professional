"use client";
import React, { useState } from "react";
import General from "./General";
import Contact from "./Contact";
import WorkExperience from "./WorkExperience";
import {
  GeneralIcon,
  HamburgerLinkIcon,
  SettingsIcon,
} from "@/imagecomponents";
import ProfileIcon from "@/imagecomponents/ProfileIcon";
import Volunteering from "./Volunteering";
import Education from "./Education";
import Certifications from "./Certifications";
import Skills from "./Skills";
import CPModal from "@/components/CPModal";
import { useRouter } from "next/navigation";
function ProfileModal() {
  const [tab, setTab] = useState<
    | "general"
    | "contact"
    | "work_experience"
    | "volunteering"
    | "education"
    | "certification"
    | "skills"
  >("general");
  const router = useRouter();
  const handleCloseModal = () => {
    router.push("/dashboard");
  };
  return (
    <CPModal backgroundAction={handleCloseModal}>
      <div className="flex text-slate p-2">
        <div className="flex flex-col gap-8 bg-[#F8FAFC] px-4 py-8">
          <button>
            <ProfileIcon />
          </button>
          <button>
            <GeneralIcon />
          </button>
          <button>
            <SettingsIcon />
          </button>
        </div>
        <div className="w-[280] border-[#E2E8F0] border-r py-8 ">
          <h3 className="mb-5 text-lg font-medium px-4.5">Profile</h3>
          <ul>
            <Item text="General" onClick={() => setTab("general")} />
            <Item text="Contact" onClick={() => setTab("contact")} />
            <Item
              text="Work Experience"
              onClick={() => setTab("work_experience")}
            />
            <Item text="Volunteering" onClick={() => setTab("volunteering")} />
            <Item text="Education" onClick={() => setTab("education")} />
            <Item
              text="Certifications"
              onClick={() => setTab("certification")}
            />
            <Item text="Skills" onClick={() => setTab("skills")} />
          </ul>
        </div>
        <div className="flex-1 p-4.5">
          {tab == "general" && <General />}
          {tab == "contact" && <Contact />}
          {tab == "work_experience" && <WorkExperience />}
          {tab == "volunteering" && <Volunteering />}
          {tab == "education" && <Education />}
          {tab == "certification" && <Certifications />}
          {tab == "skills" && <Skills />}
        </div>
      </div>
    </CPModal>
  );
}

const Item = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <li
      className="text-sm py-3 px-4.5 flex items-center justify-between text-[#475569] cursor-pointer"
      onClick={onClick}
    >
      <span>{text}</span>
      <HamburgerLinkIcon />
    </li>
  );
};

export default ProfileModal;
