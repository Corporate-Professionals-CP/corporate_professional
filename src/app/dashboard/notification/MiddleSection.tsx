"use client";

import { LeftArrow } from "@/imagecomponents";
import useSWR from "swr";
import { fetchNotification } from "./function";
import { CPEmptyState, CPprofileImg } from "@/components";
import MIddleSectionContainer from "../MIddleSectionContainer";
import CPprofileCardSkeleton from "@/components/CPprofileCardSkeleton";
import Skeleton from "react-loading-skeleton";
import CPpostCardSkeleton from "@/components/CPpostCardSkeleton";
import { TNotification } from "./type";

function MiddleSection() {
  const { data = [], isLoading } = useSWR("/notifications/", fetchNotification);
  return (
    <MIddleSectionContainer>
      <div className="mb-[18] px-6 py-5  border-b border-[#E2E8F0] text-slate font-medium flex items-center gap-6">
        <LeftArrow />
        <span>Notifications</span>
      </div>
      {isLoading ? (
        <NotificationSkeleton />
      ) : data.length == 0 ? (
        <CPEmptyState textIcon="🔔" btnText="No Notification" />
      ) : (
        <div>
          {data.map((item) => (
            <NotificationCard notification={item} key={item.id} />
          ))}
        </div>
      )}
    </MIddleSectionContainer>
  );
}

function NotificationCard({ notification }: { notification: TNotification }) {
  if (notification.type == "connection_request") {
    return (
      <div className="flex items-center gap-4  py-3 px-6 border-b border-[#E2E8F0] mb-3">
        <CPprofileImg
          size={48}
          full_name={notification.actor.full_name}
          url={notification.actor.profile_image_url}
        />
        <div className="text-[##020617] text-sm ">{notification.message}</div>
      </div>
    );
  }
  if (notification.type == "post_reaction") {
    return (
      <div className="flex items-start gap-4  py-3 px-6 border-b border-[#E2E8F0] mb-3">
        <CPprofileImg
          size={48}
          full_name={notification.actor.full_name}
          url={notification.actor.profile_image_url}
        />
        <div>
          <p className="text-[#020617] text-xs mb-1 font-medium">
            {notification.actor.full_name}
          </p>
          <p className="text-[#64748B] text-xs mb-4">
            {notification.post?.content}
          </p>
          <p className="text-[##020617] text-sm ">{notification.message}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="text-[#64748B] text-sm py-3 px-6 border-b border-[#E2E8F0] mb-3">
      {notification.message}
    </div>
  );
}
const NotificationSkeleton = () => {
  return (
    <>
      <CPprofileCardSkeleton />
      <NotiCardSkeleton />
      <NotiCardSkeleton />
      <CPpostCardSkeleton />
      <NotiCardSkeleton />
      <NotiCardSkeleton />
    </>
  );
};

const NotiCardSkeleton = () => {
  return (
    <div className="flex gap-4 items-center p-6">
      <Skeleton circle width={48} height={48} />
      <div className="flex-1">
        <Skeleton width={330} height={20} />
      </div>
      <div>
        <Skeleton width={40} height={20} />
      </div>
    </div>
  );
};
export default MiddleSection;
