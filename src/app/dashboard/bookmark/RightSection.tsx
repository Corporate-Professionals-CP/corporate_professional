import Cpdiscoverability from "@/components/Cpdiscoverability";
import CPSupportCard from "@/components/CPSupportCard";

function RightSection() {
  return (
    <section className="w-[420]  p-4 h-screen ">
      <div className="rounded-2xl shadow-[0px_12px_16px_-4px_#1018280A,0px_4px_6px_-2px_#10182808] flex flex-col  h-full justify-between p-4">
        <Cpdiscoverability />
        <CPSupportCard />
      </div>
    </section>
  );
}

export default RightSection;
