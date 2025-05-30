"use client";
import React from "react";
import MIddleSectionContainer from "../../MIddleSectionContainer";
import {
  CPdashboardBack,
  CPeducationSkeleton,
  CPprofileImg,
  CPtableListWorkExp,
} from "@/components";
import useSWR from "swr";

import { useParams } from "next/navigation"; // for App Router (Next.js 13+)
import { getUserProfile } from "./functions";
import CPprofileCardSkeleton from "@/components/CPprofileCardSkeleton";
import Skeleton from "react-loading-skeleton";

function MiddleSection() {
  const params = useParams();
  const userId = params?.userId as string;
  const { data, isLoading } = useSWR(`/profiles/${userId}`, getUserProfile);

  if (isLoading) {
    return (
      <MIddleSectionContainer>
        <div>
          <CPdashboardBack className="m-0" style={{ marginBottom: 0 }} />
          <UserSkeleton />
        </div>
      </MIddleSectionContainer>
    );
  }

  return (
    <MIddleSectionContainer>
      <div>
        <CPdashboardBack className="m-0" style={{ marginBottom: 0 }} />
        <div className="p-6">
          <div className="mb-10">
            <CPprofileCard />
          </div>
          <div className="mb-12">
            <h5 className="text-[#050505] mb-2">About</h5>
            <p className="text-[#64748B] text-sm">{data?.bio}</p>
          </div>
          <div className="mb-12">
            <h5 className="text-[#050505] mb-2">Contact</h5>
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
      </div>
    </MIddleSectionContainer>
  );
}

const CPprofileCard = () => {
  return (
    <div className="flex gap-5 items-center ">
      <CPprofileImg />
      <div className="flex-1">
        <p className="flex gap-3 items-center">
          <span className="text-[#050505] ">Femi Johnson</span>
          <span className="text-primary font-medium py-1 px-2 bg-[#F8FAFC] rounded-full">
            Talent
          </span>
        </p>
        <p className="text-[#64748B] text-sm">
          Creative Director at the noti company
        </p>
      </div>
      <button className="text-[#020617] font-medium text-sm px-3 py-2 border border-[#E2E8F0] rounded-[5px]">
        Connect
      </button>
    </div>
  );
};

const CPtableList = ({ left, right }: { left: string; right: string }) => {
  return (
    <div className=" flex gap-2">
      <p className="w-[180] text-[#64748B] text-sm">{left}</p>
      <p className="flex-1 text-slate text-sm">{right}</p>
    </div>
  );
};

const UserSkeleton = () => {
  return (
    <div>
      <CPprofileCardSkeleton />
      <div className="p-6">
        <div className="mb-12">
          <Skeleton width={100} height={20} className="mb-1.5" />
          <Skeleton height={50} className="mb-1.5" />
        </div>
        <div className="mb-12">
          <Skeleton width={100} height={20} className="mb-4" />
          <div className="flex gap-20 mb-4">
            <Skeleton width={80} height={20} />
            <Skeleton width={150} height={20} />
          </div>
          <div className="flex gap-20 mb-4">
            <Skeleton width={80} height={20} />
            <Skeleton width={150} height={20} />
          </div>
        </div>
        <div className="mb-12">
          <Skeleton width={100} height={20} className="mb-4" />
          <CPeducationSkeleton />
        </div>
        <div className="mb-12">
          <Skeleton width={100} height={20} className="mb-4" />
          <CPeducationSkeleton />
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
