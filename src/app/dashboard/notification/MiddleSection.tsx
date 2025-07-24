"use client";

import { LeftArrow } from "@/imagecomponents";

import { CPEmptyState, CPprofileImg } from "@/components";
import MIddleSectionContainer from "../MIddleSectionContainer";
import CPprofileCardSkeleton from "@/components/CPprofileCardSkeleton";
import Skeleton from "react-loading-skeleton";
import CPpostCardSkeleton from "@/components/CPpostCardSkeleton";
import { TNotification } from "./type";
import Link from "next/link";
import useNotification from "@/hooks/useNotification";

function MiddleSection() {
  const { notification, isLoading } = useNotification();
  return (
    <MIddleSectionContainer>
      <div className="mb-[18] px-6 py-5  border-b border-[#E2E8F0] text-slate font-medium flex items-center gap-6">
        <Link href={"/dashboard"}>
          <LeftArrow />
        </Link>
        <span>Notifications</span>
      </div>
      {isLoading ? (
        <NotificationSkeleton />
      ) : notification.length == 0 ? (
        <CPEmptyState textIcon="🔔" btnText="No Notification" />
      ) : (
        <div>
          {notification.map((item) => (
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
      <Link
        href={`/dashboard/user/${notification.actor?.id}`}
        className="flex items-center gap-4  py-3 px-6 border-b border-[#E2E8F0] mb-3"
      >
        <CPprofileImg
          size={48}
          full_name={notification.actor.full_name}
          url={notification.actor.profile_image_url}
        />
        <div className="text-[##020617] text-sm ">{notification.message}</div>
      </Link>
    );
  }

  if (notification.type == "connection_accept") {
    return (
      <Link
        href={`/dashboard/user/${notification.actor?.id}`}
        className="flex items-center gap-4  py-3 px-6 border-b border-[#E2E8F0] mb-3"
      >
        <CPprofileImg
          size={48}
          full_name={notification.actor.full_name}
          url={notification.actor.profile_image_url}
        />
        <div className="text-[##020617] text-sm ">{notification.message}</div>
      </Link>
    );
  }

  if (notification.type == "post_reaction") {
    return (
      <Link
        href={`/dashboard/post/${notification.post?.id}`}
        className="flex items-start gap-4  py-3 px-6 border-b border-[#E2E8F0] mb-3"
      >
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
      </Link>
    );
  }
  if (notification.type == "post_comment") {
    return (
      <Link
        href={`/dashboard/post/${notification.post?.id}`}
        className="flex items-start gap-4  py-3 px-6 border-b border-[#E2E8F0] mb-3"
      >
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
      </Link>
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
