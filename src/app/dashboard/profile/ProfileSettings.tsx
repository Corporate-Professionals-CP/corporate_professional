import React from "react";
import General from "./General";
import Contact from "./Contact";
import WorkExperience from "./WorkExperience";
import { CloseIcon, HamburgerLinkIcon } from "@/imagecomponents";
import Volunteering from "./Volunteering";
import Education from "./Education";
import Certifications from "./Certifications";
import Skills from "./Skills";
import Link from "next/link";
import SideNav from "./SideNav";

type ProfileTab =
  | ""
  | "general"
  | "contact"
  | "work_experience"
  | "volunteering"
  | "education"
  | "certification"
  | "skills";

type ProfilePageProps = {
  tab: ProfileTab;
  setTab: React.Dispatch<React.SetStateAction<ProfileTab>>;
};

function ProfileSettings({ tab, setTab }: ProfilePageProps) {
  console.log(tab, "TABBBABABABB");
  return (
    <>
      <SideNav className="max-sm:hidden" />
      <div
        className={`w-[280] border-[#E2E8F0] border-r py-8 max-sm:w-full max-sm:border-0 ${
          tab !== "" ? "max-sm:hidden" : ""
        }`}
      >
        <div className="flex justify-between items-center mb-5 px-4.5 ">
          <h3 className=" text-lg font-medium ">Profile</h3>
          <Link href={"/dashboard"} className="hidden max-sm:block">
            <CloseIcon size="20" />
          </Link>
        </div>
        <ul>
          <Item text="General" onClick={() => setTab("general")} />
          <Item text="Contact" onClick={() => setTab("contact")} />
          <Item
            text="Work Experience"
            onClick={() => setTab("work_experience")}
          />
          <Item text="Volunteering" onClick={() => setTab("volunteering")} />
          <Item text="Education" onClick={() => setTab("education")} />
          <Item text="Certifications" onClick={() => setTab("certification")} />
          <Item text="Skills" onClick={() => setTab("skills")} />
        </ul>
      </div>
      <div className={`flex-1 p-4.5 ${tab == "" ? "max-sm:hidden" : ""}`}>
        {(tab == "general" || tab == "") && <General />}
        {tab == "contact" && <Contact />}
        {tab == "work_experience" && <WorkExperience />}
        {tab == "volunteering" && <Volunteering />}
        {tab == "education" && <Education />}
        {tab == "certification" && <Certifications />}
        {tab == "skills" && <Skills />}
      </div>
    </>
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

export default ProfileSettings;
