"use client";
import { useRouter } from "next/navigation";
import {
  BookmarkIcon,
  HomeIcon,
  NotificationIcon,
  SearchIcon,
  WifiIcon,
} from "@/imagecomponents";

function LeftSection() {
  const router = useRouter();
  return (
    <section className="flex-1 py-4 p-8 flex justify-end">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-10">
          <button onClick={() => router.push("dashboard/profile")}>
            <HomeIcon />
          </button>
          <button onClick={() => router.push("dashboard/profile")}>
            <SearchIcon />
          </button>
          <button onClick={() => router.push("dashboard/profile")}>
            <WifiIcon />
          </button>
          <button onClick={() => router.push("dashboard/profile")}>
            <BookmarkIcon />
          </button>
          <button onClick={() => router.push("dashboard/profile")}>
            <NotificationIcon />
          </button>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default LeftSection;
