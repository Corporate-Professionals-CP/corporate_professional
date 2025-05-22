import React from "react";
import adobeimg from "@/assets/adobe.png";
import slackimg from "@/assets/slack.png";
import stripeimg from "@/assets/stripe.png";
import googleimg from "@/assets/google.png";
import netfliximg from "@/assets/netflix.png";
import nextimg from "@/assets/nextlogo.png";
import disneyimg from "@/assets/display.png";
import microsoftimg from "@/assets/microsoft.png";
import Image from "next/image";

function CPpartners() {
  return (
    <div className="px-20 py-24 mb-[72]">
      <p className="text-[#020617] text-center mb-10">
        Trusted and used by over 24 institutions
      </p>
      <div className="flex gap-16 justify-between overflow-x-scroll">
        <Image src={slackimg} alt="partner" className="shrink-0" />
        <Image src={stripeimg} alt="partner" className="shrink-0" />
        <Image src={googleimg} alt="partner" className="shrink-0" />
        <Image src={netfliximg} alt="partner" className="shrink-0" />
        <Image src={nextimg} alt="partner" className="shrink-0" />
        <Image src={adobeimg} alt="partner" className="shrink-0" />
        <Image src={disneyimg} alt="partner" className="shrink-0" />
        <Image src={microsoftimg} alt="partner" className="shrink-0" />
      </div>
    </div>
  );
}

export default CPpartners;
