import React from "react";
import CPprofileImg from "./CPprofileImg";
import TopRightIcon from "@/imagecomponents/TopRightIcon";
import { TNetwork } from "@/app/type";

import useUser from "@/statestore/useUser";
import Link from "next/link";
import CPdropDown from "./CPdropDown";
import { removeConnection } from "@/app/dashboard/network/function";
import useSWRMutation from "swr/mutation";

function CPprofileConnectionCard({ profile }: { profile: TNetwork }) {
  // get user and chose profile that is not user
  const user = useUser((state) => state.user);
  const connection =
    user?.id == profile.sender.id ? profile.receiver : profile.sender;

  const { trigger: onRemoveConnection } = useSWRMutation(
    `/network/${profile.id}`,
    removeConnection
  );
  return (
    <div className="flex gap-5 items-center p-3.5">
      <CPprofileImg
        url={connection.profile_image_url}
        full_name={connection.full_name}
      />
      <div className="flex-1">
        <p className="flex gap-3 items-center">
          <Link
            href={`/dashboard/user/${connection.id}`}
            className="text-[#050505]"
          >
            {connection.full_name}
          </Link>
          <span className="text-primary font-medium py-1 px-2 bg-[#F8FAFC]  text-xs rounded-full">
            {connection.recruiter_tag ? "Recruiter" : "Talent"}
          </span>
        </p>
        <p className="text-[#64748B] text-sm">{connection.industry}</p>
      </div>

      <div className="flex gap-2">
        <Link href={`/dashboard/user/${connection.id}`}>
          <TopRightIcon />
        </Link>
        <CPdropDown
          items={[
            {
              name: "Remove Connection",
              onclick: () => onRemoveConnection({ connect_id: profile.id }),
            },
          ]}
        />
      </div>
    </div>
  );
}

export default CPprofileConnectionCard;
