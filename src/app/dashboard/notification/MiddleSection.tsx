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
import { useEffect, useRef } from "react";

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
  const { markNotification } = useNotification();
  // add interception observer, if it has been observed, I want to mark them as read with an api call
  const containerRef = useRef<HTMLDivElement>(null);
  const hasMarkedRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || hasMarkedRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasMarkedRef.current) {
            // mark as read
            markNotification({ notif_id: notification.id });
            hasMarkedRef.current = true;
            observer.unobserve(el);
          }
        });
      },
      {
        root: null, // viewport
        threshold: 0.5, // 50% of card visible
        rootMargin: "0px",
      }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
    };
  }, [notification.id, markNotification]);

  const content = (
    <>
      <CPprofileImg
        size={48}
        full_name={notification.actor?.full_name}
        url={notification.actor?.profile_image_url}
      />
      <div className="flex-1">
        <p className="text-[#020617] text-xs mb-1 font-medium">
          {notification.actor?.full_name}
        </p>
        {notification.post && (
          <p className="text-[#64748B] text-xs mb-2">
            {notification.post.content}
          </p>
        )}
        <p className="text-[#020617] text-sm">{notification.message}</p>
      </div>
    </>
  );

  // wrap the whole card in a div that we observe
  return (
    <div ref={containerRef}>
      {notification.type.startsWith("connection") ? (
        <Link
          className="flex items-start gap-4 py-3 px-6 border-b border-[#E2E8F0] mb-3"
          href={
            notification.type === "connection_request"
              ? `/dashboard/user/${notification.actor?.id}`
              : `/dashboard/user/${notification.actor?.id}`
          }
        >
          {content}
        </Link>
      ) : notification.type.startsWith("post") ? (
        <Link
          className="flex items-start gap-4 py-3 px-6 border-b border-[#E2E8F0] mb-3"
          href={`/dashboard/post/${notification.post?.id}`}
        >
          {content}
        </Link>
      ) : (
        // fallback for other notification types
        <div className="flex items-start gap-4 py-3 px-6 border-b border-[#E2E8F0] mb-3">
          {content}
        </div>
      )}
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
