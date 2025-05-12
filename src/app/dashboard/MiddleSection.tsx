"use client";
import CPpostCard from "@/components/CPpostCard";
import CPprofileImg from "@/components/CPprofileImg";
import { Dispatch, SetStateAction, useState } from "react";

function MiddleSection() {
  const [selectTab, setSelectTab] = useState(0);
  return (
    <section className="w-[600] border border-[#E2E8F0] ">
      <div className="flex">
        <Tab
          text="Highlights"
          setSelectTab={setSelectTab}
          tabnumber={0}
          selectTab={selectTab}
        />
        <Tab
          text="My Network"
          setSelectTab={setSelectTab}
          tabnumber={1}
          selectTab={selectTab}
        />
      </div>
      <div className="border-y border-[#E2E8F0] flex p-6 gap-4 items-center">
        <CPprofileImg size={48} />
        <textarea
          className=" placeholder:text-[#94A3B8] flex-1 px-2 py-2 min-h-[40]"
          placeholder="What’s on your mind...?"
        />
      </div>
      <div>
        <CPpostCard />
        <CPpostCard />
        <CPpostCard />
        <CPpostCard />
        <CPpostCard />
        <CPpostCard />
      </div>
    </section>
  );
}

const Tab = ({
  text,
  setSelectTab,
  selectTab,
  tabnumber,
}: {
  text: string;
  selectTab: number;
  setSelectTab: Dispatch<SetStateAction<number>>;
  tabnumber: number;
}) => {
  return (
    <div
      className="px-5 pt-5 gap-5 w-1/2 text-center text-[#020617] font-medium flex flex-col items-center  cursor-pointer"
      onClick={() => setSelectTab(tabnumber)}
    >
      <span>{text}</span>
      <div
        className={`w-[54] h-[3] ${
          selectTab == tabnumber ? "bg-primary" : "bg-white"
        }`}
        style={{ borderRadius: "6px 6px 0px 0px" }}
      ></div>
    </div>
  );
};

export default MiddleSection;
