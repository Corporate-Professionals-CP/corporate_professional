"use client";

import { LeftArrow } from "@/imagecomponents";
import useSWR from "swr";
import { fetchNotification } from "./function";
import { CPEmptyState } from "@/components";
import MIddleSectionContainer from "../MIddleSectionContainer";
import CPprofileCardSkeleton from "@/components/CPprofileCardSkeleton";
import Skeleton from "react-loading-skeleton";
import CPpostCardSkeleton from "@/components/CPpostCardSkeleton";

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
        data.map((item) => <div key={item.id}>{item.message}</div>)
      )}
    </MIddleSectionContainer>
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
