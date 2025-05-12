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
      <div className="flex gap-2 justify-between">
        <Image src={slackimg} alt="partner" />
        <Image src={stripeimg} alt="partner" />
        <Image src={googleimg} alt="partner" />
        <Image src={netfliximg} alt="partner" />
        <Image src={nextimg} alt="partner" />
        <Image src={adobeimg} alt="partner" />
        <Image src={disneyimg} alt="partner" />
        <Image src={microsoftimg} alt="partner" />
      </div>
    </div>
  );
}

export default CPpartners;
