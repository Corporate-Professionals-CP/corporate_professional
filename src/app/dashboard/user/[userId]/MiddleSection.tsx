"use client";
import React from "react";
import MIddleSectionContainer from "../../MIddleSectionContainer";
import {
  CPdashboardBack,
  CPeducationSkeleton,
  CPprofileImg,
  CPspinnerLoader,
  CPtableListWorkExp,
} from "@/components";
import useSWR from "swr";

import { useParams } from "next/navigation"; // for App Router (Next.js 13+)
import { downloadCv, getUserProfile } from "./functions";
import CPprofileCardSkeleton from "@/components/CPprofileCardSkeleton";
import Skeleton from "react-loading-skeleton";
import { TUser } from "@/app/type";
import { DownloadIcon } from "@/imagecomponents";

import useUser from "@/statestore/useUser";
import useSWRMutation from "swr/mutation";
import { errorMessage, successMessage } from "@/utils/toastalert";
import dayjs from "dayjs";

function MiddleSection() {
  const params = useParams();
  const userId = params?.userId as string;
  const { data, isLoading } = useSWR(`/profiles/${userId}`, getUserProfile);

  if (isLoading || !data) {
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
            <CPprofileCard user={data} />
          </div>
          <div className="mb-12">
            <h5 className="text-[#050505] mb-2">About</h5>
            <p className="text-[#64748B] text-sm">{data?.bio}</p>
          </div>
          <div className="mb-12">
            <h5 className="text-[#050505] mb-2">Contact</h5>

            <div className="flex flex-col gap-2">
              {data.contact.map((item) => (
                <CPtableList
                  key={item.id}
                  left={item.platform_name}
                  right={item.username}
                />
              ))}
            </div>
          </div>
          <div className="mb-12">
            <h5 className="text-[#050505] mb-5">Professional Details</h5>
            <div className="flex flex-col gap-2">
              <CPtableList left="Industry" right={data.industry} />
              <CPtableList left="Experience" right={data.years_of_experience} />
            </div>
          </div>
          <div className="mb-12">
            <div className="mb-5 flex justify-between">
              <h5 className="text-[#050505] ">
                Work Experience
                {/* <span className="text-primary text-xs">~ From Cv</span> */}
              </h5>

              {/* <button>Edit</button> */}
            </div>
            <div className="flex flex-col gap-6">
              {data.work_experience.map((exp) => (
                <CPtableListWorkExp
                  key={exp.id}
                  left={`${dayjs(exp.start_date).format(
                    "DD MMM YYYY"
                  )} - ${dayjs(exp.end_date).format("DD MMM YYYY")}`}
                  title={exp.title}
                  location={exp.location}
                  list={[exp.description]}
                />
              ))}
            </div>
          </div>
          <div className="mb-12">
            <div className="mb-5 flex justify-between">
              <h5 className="text-[#050505] ">Education</h5>
            </div>
            <div className="flex flex-col gap-6">
              {data.education.map((exp) => (
                <CPtableListWorkExp
                  key={exp.id}
                  left={`${dayjs(exp.from_date).format(
                    "DD MMM YYYY"
                  )} - ${dayjs(exp.to_date).format("DD MMM YYYY")}`}
                  title={exp.school}
                  location={exp.location}
                  list={[exp.description]}
                />
              ))}
            </div>
          </div>
          <div className="mb-12">
            <h5 className="text-[#050505] mb-5">Profile Preferences</h5>
            <div className="flex flex-col gap-2">
              <CPtableList left="Visibility" right={data.visibility} />
              <CPtableList
                left="Status"
                right={data.recruiter_tag ? "Recruiter" : "Talent"}
              />
            </div>
          </div>
        </div>
      </div>
    </MIddleSectionContainer>
  );
}

const CPprofileCard = ({ user }: { user: TUser }) => {
  const currUser = useUser((state) => state.user);
  const { trigger, isMutating } = useSWRMutation(
    `/profiles/${user.id}/cv`,
    downloadCv
  );
  const ondownloadCv = async () => {
    try {
      const response = await trigger();

      const link = document.createElement("a");
      link.href = response.download_url;
      link.setAttribute("download", "cv.pdf");
      link.setAttribute("target", "_blank");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      successMessage("CV retrieved");
    } catch (err) {
      errorMessage(err, "error downloading cv");
    }
  };
  return (
    <div className="flex gap-5 items-center ">
      <CPprofileImg full_name={user?.full_name} url={user?.profile_image_url} />
      <div className="flex-1">
        <p className="flex gap-3 items-center">
          <span className="text-[#050505] ">{user?.full_name}</span>
          <span className="text-primary font-medium py-1 px-2 bg-[#F8FAFC] rounded-full">
            {/* {user.recruiter_tag ? "Recruiter" : "Talent"} */}
          </span>
        </p>
        {/* <p className="text-[#64748B] text-sm">{user.job_title}</p> */}
      </div>
      <div className="flex gap-2 items-center">
        <button className="text-[#020617] font-medium text-sm px-3 py-2 border border-[#E2E8F0] rounded-[5px]">
          Connect
        </button>
        {!currUser?.recruiter_tag && (
          <button onClick={ondownloadCv} disabled={isMutating}>
            {isMutating ? <CPspinnerLoader size={10} /> : <DownloadIcon />}
          </button>
        )}
      </div>
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
