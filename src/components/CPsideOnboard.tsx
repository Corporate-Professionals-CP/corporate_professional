import Image from "next/image";
import CPtermsAndPrivacy from "./CPtermsAndPrivacy";
function CPsideOnboard() {
  return (
    <section className="text-white p-4 flex flex-col h-full w-[432]">
      <Image
        src={"/logo-white.svg"}
        width={120}
        height={37}
        alt="log"
        className="self-start mb-[68]"
      />
      <div className="flex-1">
        <p className="text-primary text-sm mb-2">Get started</p>
        <h3 className="font-medium text-2xl mb-4">
          Welcome to a Network That Moves You Forward.
        </h3>
        <p className="text-[#94A3B8]">
          A few quick steps to personalize your experience.
        </p>
      </div>
      <div className="w-[358]">
        <p className="text-lg mb-[40] tracking-[-0.25px]">
          &quot;I connect with industry leaders, stay updated on trends, and
          find mentorship to grow my career.
        </p>
        <div className="flex gap-2 items-center mb-12">
          <div>
            <p className="text-[#F8FAFC] m-[2]">Aisha</p>
            <p className="text-[#94A3B8]">Marketing Manager</p>
          </div>
        </div>
        <CPtermsAndPrivacy className="text-[#94A3B8]" />
      </div>
    </section>
  );
}

export default CPsideOnboard;
