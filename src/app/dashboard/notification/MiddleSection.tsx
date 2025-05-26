"use client";

import { LeftArrow } from "@/imagecomponents";
import useSWR from "swr";
import { fetchNotification } from "./function";
import { CPEmptyState, CPspinnerLoader } from "@/components";

function MiddleSection() {
  const { data = [], isLoading } = useSWR("/notifications/", fetchNotification);
  return (
    <section className="w-[600] border border-[#E2E8F0] h-screen">
      <div className="mb-[18] px-6 py-5  border-b border-[#E2E8F0] text-slate font-medium flex items-center gap-6">
        <LeftArrow />
        <span>Notifications</span>
      </div>
      {isLoading ? (
        <CPspinnerLoader />
      ) : data.length == 0 ? (
        <CPEmptyState textIcon="🔔" />
      ) : (
        data.map((item) => <div key={item.id}>{item.message}</div>)
      )}
    </section>
  );
}

export default MiddleSection;
