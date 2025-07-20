import React from "react";
import CPprofileImg from "./CPprofileImg";
import { TSuggestedNetwork } from "@/app/type";
import useSWRMutation from "swr/mutation";
import { makeConnection } from "@/app/dashboard/network/function";

import { CPbuttonTransparent } from "./CPbutton";
import Link from "next/link";

function CPprofileNetworkCard({ profile }: { profile: TSuggestedNetwork }) {
  const { trigger, isMutating } = useSWRMutation(
    "/network/connect",
    makeConnection
  );

  return (
    <div className="flex gap-5 items-center p-3.5">
      <CPprofileImg
        full_name={profile.full_name}
        url={profile.profile_image_url}
      />
      <div className="flex-1">
        <p className="flex gap-3 items-center">
          <Link
            href={`/dashboard/user/${profile.id}`}
            className="text-[#050505]"
          >
            {profile.full_name}
          </Link>
          <span className="text-primary font-medium py-1 px-2 bg-[#F8FAFC]  text-xs rounded-full">
            {profile.recruiter_tag ? "Recruiter" : "Talent"}
          </span>
        </p>
        <p className="text-[#64748B] text-sm">{profile.job_title}</p>
      </div>

      <div className="flex gap-2">
        <CPbuttonTransparent
          loading={isMutating}
          onClick={() => trigger({ user_id: profile.id })}
        >
          Connect
        </CPbuttonTransparent>

        {/* <button>
          <MoreIcon />
        </button> */}
      </div>
    </div>
  );
}

export default CPprofileNetworkCard;
