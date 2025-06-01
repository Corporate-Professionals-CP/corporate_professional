import React from "react";
import connectpeople from "@/assets/connectpeople.png";
import Image from "next/image";
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

export default Connect;
