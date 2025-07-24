import { TwofourIcon } from "@/imagecomponents";

function CPSupportCard() {
  return (
    <div className="bg-[#F8FAFC] rounded-[8] p-4 support">
      <div className="mb-4">
        <TwofourIcon />
      </div>
      <div className="mb-[18px]">
        <p className="mb-2 text-sm font-medium text-slate">Need help?</p>
        <p className="text-[#334155] text-sm">Contact our cusomer support</p>
      </div>
      <a
        href="mailto:info@corporatesandprofessionals.com"
        className="text-slate bg-white font-medium border border-[#E2E8F0]  py-2 px-3"
      >
        Contact support
      </a>
    </div>
  );
}

export default CPSupportCard;
