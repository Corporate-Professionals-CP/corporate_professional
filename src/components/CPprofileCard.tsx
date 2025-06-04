import React, { ButtonHTMLAttributes } from "react";
import CPprofileImg from "./CPprofileImg";
import { TNetwork } from "@/app/type";
import useSWRMutation from "swr/mutation";
import {
  acceptConnection,
  ignoreConnection,
  nudgeConnection,
  withdrawConnection,
} from "@/app/dashboard/network/function";
import useUser from "@/statestore/useUser";
import CPspinnerLoader from "./CPspinnerLoader";

const CPprofileCard = ({
  profile,
  isUser = false,
}: {
  profile: TNetwork;
  isUser?: boolean;
}) => {
  const user = useUser((state) => state.user);
  const connection =
    user?.id == profile.sender.id ? profile.receiver : profile.sender;
  const { trigger: onWithdraw, isMutating: loadingWithdraw } = useSWRMutation(
    `/network/${profile.id}`,
    withdrawConnection
  );
  const { trigger: onNudge, isMutating: loadingNudge } = useSWRMutation(
    `/network/${profile.id}/nudge`,
    nudgeConnection
  );
  const { trigger: onIgnore, isMutating: loadingIgnore } = useSWRMutation(
    `/network/${profile.id}/respond/`,
    ignoreConnection
  );
  const { trigger: onAccept, isMutating: loadingAccept } = useSWRMutation(
    `/network/${profile.id}/respond/`,
    acceptConnection
  );
  return (
    <div className="flex gap-5 items-center p-3.5">
      <CPprofileImg
        full_name={connection.full_name}
        url={connection.profile_image_url}
      />
      <div className="flex-1">
        <p className="flex gap-3 items-center">
          <span className="text-[#050505] ">{connection.full_name}</span>
          <span className="text-primary font-medium py-1 px-2 bg-[#F8FAFC]  text-xs rounded-full">
            {connection.recruiter_tag ? "Recruiter" : "Talent"}
          </span>
        </p>
        <p className="text-[#64748B] text-sm">{connection.industry}</p>
      </div>
      {isUser ? (
        <div className="flex items-center">
          <Button
            className="text-sm font-medium text-slate py-2 px-3"
            loading={loadingWithdraw}
            onClick={() => onWithdraw({ connect_id: profile.id })}
          >
            Withdraw
          </Button>
          <Button
            className="text-sm font-medium text-slate py-2 px-3 rounded-[5px] border border-[#7074FF]"
            loading={loadingNudge}
            onClick={() => onNudge()}
          >
            Nudge
          </Button>
        </div>
      ) : (
        <div className="flex items-center">
          <Button
            className="text-sm font-medium text-slate py-2 px-3"
            loading={loadingIgnore}
            onClick={() => onIgnore({ connect_id: profile.id })}
          >
            Ignore
          </Button>
          <Button
            className="text-sm font-medium text-slate py-2 px-3 rounded-[5px] border border-[#7074FF] "
            loading={loadingAccept}
            onClick={() => onAccept({ connect_id: profile.id })}
          >
            Accept
          </Button>
        </div>
      )}
    </div>
  );
};

const Button = ({
  loading = false,
  className,
  children,
  ...props
}: {
  loading?: boolean;
  className?: string;
  children: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={` ${className} flex items-center gap-1`}
      disabled={loading}
      {...props}
    >
      {loading && <CPspinnerLoader size={15} />}
      {children}
    </button>
  );
};
export default CPprofileCard;
