"use client";
import CPdropDown from "@/components/CPdropDown";
import CPsideOnboard from "@/components/CPsideOnboard";
import CPsmallButton from "@/components/CPsmallButton";
import CPtableListWorkExp from "@/components/CPtableListWorkExp";
import { CameraIcon } from "@/imagecomponents";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  const onClick = () => {
    router.push("/dashboard");
  };
  return (
    <main className="bg-primary p-4 h-screen min-h-screen flex ">
      <CPsideOnboard />
      <div className="flex-1 bg-white rounded-2xl flex justify-center pt-[103] overflow-scroll">
        <div className="w-[540] pb-16">
          <TopProfile />
          <div className="mx-5 mt-[50] mb-[31]">
            <div className="mb-12">
              <h5 className="text-[#050505] mb-2">About</h5>
              <p className="text-[#64748B] text-sm">
                Product designer passionate about crafting seamless,
                user-friendly experiences. I specialise in UX/UI, design
                systems, and solving complex problems with simple, elegant
                solutions.
              </p>
            </div>
            <div className="mb-12">
              <h5 className="text-[#050505] mb-5">Contact</h5>
              <div className="flex flex-col gap-2">
                <CPtableList left="Email" right="danielanozie@icloud.com" />
                <CPtableList left="Linkedin" right="Link" />
              </div>
            </div>

            <div className="mb-12">
              <h5 className="text-[#050505] mb-5">Professional Details</h5>
              <div className="flex flex-col gap-2">
                <CPtableList left="Industry" right="Technology & IT" />
                <CPtableList left="Experience" right="6+ years " />
              </div>
            </div>

            <div className="mb-12">
              <div className="mb-5 flex justify-between">
                <h5 className="text-[#050505] ">
                  Work Experience
                  <span className="text-primary text-xs">~ From Cv</span>
                </h5>

                <button>Edit</button>
              </div>
              <div className="flex flex-col gap-10">
                <CPtableListWorkExp
                  left="2024 - Now"
                  title="Design Lead at The NOTI Company"
                  location="Lagos, Nigeria"
                  list={[
                    "Designed aesthetically pleasing and highly functional websites that exceeded client expectations, leading to increased client retention and referrals by 24.76%.",
                    " Designed aesthetically pleasing and highly functional websites that exceeded client expectations, leading to increased client retention and referrals by 24.76%.",
                  ]}
                />
                <CPtableListWorkExp
                  left="2023 - 2024"
                  title="Head of Strategy at Refresh Studio"
                  location="Remote"
                  list={[
                    "Refresh is a remote team of curious thinkers, designers and strategists helping brands to define their future.",
                  ]}
                />
                <CPtableListWorkExp
                  left="2023 - 2024"
                  title="Creative Director, Co-founder at Good Fucking Design Advice﻿"
                  location="Remote"
                  list={[
                    "Turned an otherwise profanity-laden noteworthy website for creatives into a successful three year career and entertaining story actually worth reading.",
                  ]}
                />
              </div>
            </div>

            <div className="mb-12">
              <div className="mb-5 flex justify-between">
                <h5 className="text-[#050505] ">
                  Education
                  <span className="text-primary text-xs">~ From Cv</span>
                </h5>

                <button>Edit</button>
              </div>
              <div className="flex flex-col gap-10">
                <CPtableListWorkExp
                  left="2024 - Now"
                  title="BSc. Electrical and Electronics Engineering at University of Lagos"
                  location="Lagos, Nigeria"
                />
                <CPtableListWorkExp
                  left="2020 - 2020"
                  title="Georgia Institute of Technology: Intro to User Experience Design "
                  location="Cousera"
                />
              </div>
            </div>

            <div className="mb-12">
              <h5 className="text-[#050505] mb-5">Profile Preferences</h5>
              <div className="flex flex-col gap-2">
                <CPtableList left="Visibility" right="Private" />
                <CPtableList left="Status" right="Talent" />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2 py-12">
            <button className="p-3">Back</button>
            <CPsmallButton text="Next" onClick={onClick} />
          </div>
        </div>
      </div>
    </main>
  );
}

const CPtableList = ({ left, right }: { left: string; right: string }) => {
  return (
    <div className=" flex gap-2">
      <p className="w-[180] text-[#64748B] text-sm">{left}</p>
      <p className="flex-1 text-slate text-sm">{right}</p>
    </div>
  );
};

const TopProfile = () => {
  const onClickEdit = () => {};
  const onClickPrint = () => {
    window.print();
    window.alert("hi there");
  };
  return (
    <div className="flex items-center ">
      {/* picture */}
      <div className="bg-[#050505] w-[90] h-[90] rounded-full  flex justify-center items-center relative">
        <p className="text-5xl text-white">D</p>
        <label
          className="rounded-full absolute -bottom-4 bg-white text-[#050505] px-[11] py-[5] text-xs flex items-center gap-1"
          style={{
            boxShadow:
              "0px 17.29px 20.75px -3.46px #10182814, 0px 6.92px 6.92px -3.46px #10182808 ",
          }}
        >
          <input className="hidden" type="file" />
          <CameraIcon />
          <span className="translate-y-0.5">Add</span>
        </label>
      </div>
      <div className="ml-5 flex-1">
        <div className="flex gap-5 items-center mb-2">
          <h3 className="font-medium text-lg">Daniel O. Anozie</h3>
          <p className="text-[#7074FF] text-xs font-medium">Talent</p>
        </div>
        <p className="text-[#64748B]">Product Designer in Lagos. He/Him</p>
      </div>
      <div className="self-start">
        <CPdropDown
          items={[
            { name: "Edit Profile", onclick: onClickEdit },
            { name: "Print Profile", onclick: onClickPrint },
          ]}
        />
      </div>
      {/* more */}
    </div>
  );
};
