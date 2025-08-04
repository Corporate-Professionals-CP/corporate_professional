import React from "react";
import accounted from "@/assets/cppatners/accounted.png";
import auc from "@/assets/cppatners/auc.jpg";
import girlsconstruction from "@/assets/cppatners/girlsunderconstruction.jpg";
import insurance from "@/assets/cppatners/insurance.png";

// import irxcruit from "@/assets/cppatners/irxcruit.jpg";
import knightshield from "@/assets/cppatners/knightshield.jpg";
// import lawcity from "@/assets/cppatners/lawcity.jpg";
import recon2 from "@/assets/cppatners/recon2.png";
import social from "@/assets/cppatners/social-changer.jpg";
import stemthinktank from "@/assets/cppatners/stemthinktank.jpg";
import tsb from "@/assets/cppatners/TSB.png";
import Image from "next/image";

function CPpartners() {
  return (
    <div id="patners" className="px-20 mb-[168] max-sm:mb-[57] ">
      <p className="text-slate text-center mb-10">
        Trusted and used by over 24 institutions
      </p>
      <div className="flex gap-16  items-center justify-between overflow-x-scroll scrollbar-hide">
        <Image
          src={accounted}
          alt="partner"
          className="shrink-0 w-[130px] h-[30px] object-cover"
        />
        <Image
          src={auc}
          alt="partner"
          className="shrink-0 w-[200px] h-[100px] object-cover"
        />
        <Image
          src={girlsconstruction}
          alt="partner"
          className="shrink-0 w-[200px] h-[100px] object-cover"
        />
        <Image
          src={insurance}
          alt="partner"
          className="shrink-0 w-[200px] h-[100px] object-cover"
        />

        {/* <Image
          src={irxcruit}
          alt="partner"
          className="shrink-0 w-[200px] h-[100px] object-cover"
        /> */}
        <Image
          src={knightshield}
          alt="partner"
          className="shrink-0 w-[200px] h-[100px] object-cover"
        />
        {/* <Image
          src={lawcity}
          alt="partner"
          className="shrink-0 w-[200px] h-[100px] object-cover"
        /> */}

        <Image
          src={recon2}
          alt="partner"
          className="shrink-0 w-[200px] h-[100px] object-cover"
        />
        <Image
          src={social}
          alt="partner"
          className="shrink-0 w-[200px] h-[100px] object-cover"
        />
        <Image
          src={stemthinktank}
          alt="partner"
          className="shrink-0 w-[200px] h-[100px] object-contain"
        />
        <Image
          src={tsb}
          alt="partner"
          className="shrink-0 w-[200px] h-[100px] object-cover"
        />
      </div>
    </div>
  );
}

export default CPpartners;
