import CPsmallButton from "@/components/CPsmallButton";
import CPSupportCard from "@/components/CPSupportCard";

function RightSection() {
  return (
    <section className="w-[420]  p-4">
      <div className="p-4 rounded-2xl shadow-[0px_12px_16px_-4px_#1018280A,0px_4px_6px_-2px_#10182808]">
        <div className="flex justify-between items-start mb-6">
          <h3 className="font-medium text-lg">Account setup</h3>
          <div>
            <span className="text-xs text-[#475569]">0/4 completed</span>
            <span className="block w-full bg-primary h-1 rounded-2xl"></span>
          </div>
        </div>
        <div className="flex gap-4 items-center mb-6">
          <div className="w-[63] h-[63] rounded-full bg-[#050505]"></div>
          <div>
            <p>
              <span className="font-medium text-2xl">10</span>
              <span className="text-xs">pts</span>
            </p>
            <p className="text-[#64748B] text-sm">Discoverability</p>
          </div>
        </div>
        <div>
          <div className="h-[120] bg-[#F8FAFC] rounded-xl mb-3"></div>
          <p className="text-[#64748B] text-sm">
            To completely setup your account, complete these steps below:
          </p>
        </div>
        <div className="flex flex-col gap-2 mb-12">
          <CPcard />
          <CPcard />
          <CPcard />
          <CPcard />
        </div>
        <CPSupportCard />
      </div>
    </section>
  );
}

const CPcard = () => {
  return (
    <div className="flex gap-2 items-center p-3 border border-[#F1F5F9] rounded-md ">
      {/* icon */}
      <div className="flex-1">
        <h6 className="text-[#050505] text-sm ">Location</h6>
        <p className="text-[#475569] text-xs">
          Connect with nearby professionals.
        </p>
      </div>
      <CPsmallButton text="Add" />
    </div>
  );
};

export default RightSection;
