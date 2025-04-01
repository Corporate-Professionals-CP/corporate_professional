"use client";
import LeftSection from "./LeftSection";
import MiddleSection from "./MiddleSection";
import RightSection from "./RightSection";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen">
      <LeftSection />
      <MiddleSection />
      <RightSection />
    </main>
  );
}
