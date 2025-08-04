import Image from "next/image";
import CPtermsAndPrivacy from "./CPtermsAndPrivacy";

import CPprofileImg from "./CPprofileImg";
import Link from "next/link";
import { CheckIcon } from "@/imagecomponents";
function CPsideOnboard({ step }: { step: number }) {
  return (
    <section className="text-white p-4 flex flex-col h-full w-[432] max-lg:w-[300]">
      <Link href={"/"}>
        <Image
          src={"/logo-white-full.svg"}
          width={120}
          height={37}
          alt="log"
          className="self-start mb-[68]"
        />
      </Link>
      <div className="flex-1">
        <p className="text-[#E6F6FF] text-sm mb-2">Get started</p>
        <h3 className="font-medium text-2xl mb-4">
          Welcome to a Network That Moves You Forward.
        </h3>
        <p className="text-[#F8FAFC] mb-4">
          A few quick steps to personalize your experience.
        </p>
        <ul>
          <ListItem text="Basic Information" mark={step > 1} />
          <ListItem text="Professional Details" mark={step > 3} />
          <ListItem text="Profile Preferences" mark={step > 7} />
          <ListItem text="Engagement & Feed Curation" mark={step > 10} />
          {/* <ListItem text="Special symbols (*, &, @ etc.)" /> */}
        </ul>
      </div>
      <div className="max-w-[358] max-md:mt-6">
        <p className="text-lg mb-[40] tracking-[-0.25px]">
          &quot;I connect with industry leaders, stay updated on trends, and
          find mentorship to grow my career.
        </p>
        <div className="flex gap-2 items-center mb-12">
          <CPprofileImg size={40} />
          <div>
            <p className="text-[#F8FAFC] m-[2]">Aisha</p>
            <p className="text-[#FFFFFFB3]">Marketing Manager</p>
          </div>
        </div>
        <CPtermsAndPrivacy className="text-[#FFFFFFB3]" />
      </div>
    </section>
  );
}

const ListItem = ({ text, mark }: { text: string; mark: boolean }) => {
  return (
    <li className="flex items-center gap-2 mb-3">
      <div
        className={`w-4 h-4 grid place-content-center rounded-4xl border border-[#82E6B6] ${
          mark ? "bg-[#82E6B6]" : ""
        }`}
      >
        {mark && <CheckIcon size={16} color="#fff" />}
      </div>
      <span className="text-sm">{text}</span>
    </li>
  );
};

export default CPsideOnboard;
