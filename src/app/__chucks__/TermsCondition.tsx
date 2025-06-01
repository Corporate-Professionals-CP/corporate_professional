import React from "react";
import { StartIcon } from "@/imagecomponents";

function TermsCondition() {
  return (
    <section className="bg-primary pt-[134] pb-[133] text-white text-center px-6">
      <div className="max-w-[960] m-auto">
        <p className="mb-5">TC&P IN A NUTSHELL</p>
        <p className="text-[39px] mb-10 max-sm:text-[30px]">
          TC&P is a global network 🌍 connecting professionals 🤝, supporting
          growth 📈, and providing career opportunities through mentorship,
          resources, and expert-led programs 🎓.
        </p>
        <div className="flex justify-center items-center gap-2 max-sm:flex-col">
          <div className="flex  gap-1">
            <StartIcon />
            <StartIcon />
            <StartIcon />
            <StartIcon />
            <StartIcon />
          </div>
          <span className="translate-y-[3px]">Reviews from Professionals</span>
        </div>
      </div>
    </section>
  );
}

export default TermsCondition;
