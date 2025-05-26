import { CPbuttonTwo } from "@/components/CPbutton";
import React from "react";

function WhyJoin() {
  return (
    <section className="flex gap-5 items-end justify-center mb-20 px-6 max-md:flex-col max-md:items-stretch">
      <div className="w-[460] max-md:w-full">
        <h3 className="text-primary ">Why Join Us?</h3>
        <p className="text-[#050505 text-[32px] font-medium leading-[1.2] max-sm:text-[24px]">
          We are building the Largest Global Network of Corporate Professionals
        </p>
      </div>
      <div className="w-[460] max-md:w-full">
        <p className="text-[#334155] mb-6">
          A space for connectivity, growth, and innovation in the corporate
          sector.
        </p>
        <CPbuttonTwo className="w-[300px] max-sm:w-full" link="/onboarding">
          Join us
        </CPbuttonTwo>
      </div>
    </section>
  );
}

export default WhyJoin;
