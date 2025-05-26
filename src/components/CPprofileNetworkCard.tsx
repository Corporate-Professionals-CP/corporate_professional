import React from "react";
import CPprofileImg from "./CPprofileImg";
import { TSuggestedNetwork } from "@/app/type";
import useSWRMutation from "swr/mutation";
import { makeConnection } from "@/app/dashboard/network/function";

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
          <span className="text-[#050505] ">{profile.full_name}</span>
          <span className="text-primary font-medium py-1 px-2 bg-[#F8FAFC]  text-xs rounded-full">
            {profile.recruiter_tag ? "Recruiter" : "Talent"}
          </span>
        </p>
        <p className="text-[#64748B] text-sm">{profile.industry}</p>
      </div>

      <div className="flex gap-2">
        <button
          disabled={isMutating}
          onClick={() => trigger({ user_id: profile.id })}
          className="text-[#020617] font-medium text-sm px-3 py-2 border border-[#E2E8F0] rounded-[5px]"
        >
          Connect
        </button>
        {/* <button>
          <MoreIcon />
        </button> */}
      </div>
    </div>
  );
}

export default CPprofileNetworkCard;
