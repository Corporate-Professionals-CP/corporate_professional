"use client";
import Image from "next/image";
import CPheader from "@/components/CPheader";
import CPpartners from "@/components/CPpartners";
import connectpeople from "@/assets/connectpeople.png";

import { StartIcon } from "@/imagecomponents";
import ProfessionalTabs from "./__chucks__/ProfessionalTabs";
import NetWorking from "./__chucks__/Networking";
import WhyJoin from "./__chucks__/WhyJoin";
import Professional from "./__chucks__/Professional";
import Footer from "./__chucks__/Footer";
import Empowering from "./__chucks__/Empowering";
import SuccesfulCareer from "./__chucks__/SuccesfulCareer";
import Building from "./__chucks__/Building";
import FAQ from "./__chucks__/FAQ";

export default function Home() {
  return (
    <>
      <CPheader />
      <main>
        <Empowering />
        <CPpartners />
        <WhyJoin />
        <Connect />
        <NetWorking />
        <SuccesfulCareer />
        <TermsCondition />
        <ProfessionalTabs />
        <Professional />
        <Building />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

function Connect() {
  return (
    <section id="connect" className="px-[75] mb-[150]">
      <Image
        src={connectpeople}
        alt="connect"
        className="w-full object-cover"
      />
    </section>
  );
}

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
