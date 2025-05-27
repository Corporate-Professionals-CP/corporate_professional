"use client";
import CPpostCard from "@/components/CPpostCard";
import CPprofileImg from "@/components/CPprofileImg";
import { Dispatch, SetStateAction, useState } from "react";
import useSWR from "swr";
import { fetchFeeds, fetchFeedsNetwork } from "./functions";
import { CPspinnerLoader } from "@/components";

import CreatePostModal from "./CreatePostModal";
import MIddleSectionContainer from "./MIddleSectionContainer";

function MiddleSection() {
  const [selectTab, setSelectTab] = useState(0);
  const [createmodal, setCreatemodal] = useState(false);

  return (
    <MIddleSectionContainer>
      <>
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
          <p
            className=" text-[#94A3B8] flex-1 px-2 py-2 min-h-[40]"
            onClick={() => setCreatemodal(true)}
          >
            What’s on your mind...?
          </p>
        </div>
        {selectTab == 0 && <Feeds />}
        {selectTab == 1 && <Networks />}
        {createmodal && <CreatePostModal setCreatemodal={setCreatemodal} />}
      </>
    </MIddleSectionContainer>
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
      className="px-5 pt-5 gap-5 w-1/2 text-center text-slate font-medium flex flex-col items-center  cursor-pointer"
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

const Feeds = () => {
  const { data, isLoading } = useSWR("/feed/", fetchFeeds);
  return (
    <div>
      {isLoading ? (
        <CPspinnerLoader />
      ) : (
        data?.map((post) => <CPpostCard key={post.id} post={post} />)
      )}
    </div>
  );
};

const Networks = () => {
  const { data, isLoading } = useSWR("/feed/network", fetchFeedsNetwork);
  return (
    <div>
      {isLoading ? (
        <CPspinnerLoader />
      ) : (
        data?.map((post) => <CPpostCard key={post.id} post={post} />)
      )}
    </div>
  );
};

export default MiddleSection;
