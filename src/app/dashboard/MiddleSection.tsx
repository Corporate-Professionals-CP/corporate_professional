import CPpostCard from "@/components/CPpostCard";

function MiddleSection() {
  return (
    <section className="w-[600] border border-[#E2E8F0] ">
      <div className="flex">
        <div className="p-5 w-1/2 text-center">Highlights</div>
        <div className="p-5 w-1/2 text-center">My Network</div>
      </div>
      <div className="border-y border-[#E2E8F0] flex p-6">
        <input type="text" className="" placeholder="What’s on your mind...?" />
      </div>
      <div>
        <CPpostCard />
        <CPpostCard />
        <CPpostCard />
        <CPpostCard />
        <CPpostCard />
        <CPpostCard />
      </div>
    </section>
  );
}

export default MiddleSection;
