import CPModal from "@/components/CPModal";
import CPprofileImg from "@/components/CPprofileImg";
import { SearchIcon } from "@/imagecomponents";

function DashboardModals() {
  return (
    <CPModal>
      <div className="p-[18]">
        <div className="flex items-center gap-[11] py-3 mb-4">
          <SearchIcon size={20} />
          <input
            placeholder="Search by name, job title, company, or industry..."
            className="text-sm flex-1"
          />
        </div>
        <div className="flex flex-wrap gap-2 mb-9">
          <CPsmallTab text={"Role"} />
          <CPsmallTab text={"Location"} />
          <CPsmallTab text={"Has worked at"} />
          <CPsmallTab text={"Industry"} />
          <CPsmallTab text={"Years of experience"} />
          <CPsmallTab text={"Skill"} />
        </div>
        <div className="mb-4">
          <h4 className="text-sm text-[#64748B] mb-2">Recently Viewed</h4>
          <CPprofileCard />
          <CPprofileCard />
          <CPprofileCard />
        </div>
        <div>
          <h4 className="text-sm text-[#64748B] mb-2">Recently joined</h4>
          <CPprofileCard />
          <CPprofileCard />
          <CPprofileCard />
        </div>
        <div>
          <h4 className="text-sm text-[#64748B] mb-2">Recently joined</h4>
          <CPprofileCard />
          <CPprofileCard />
          <CPprofileCard />
        </div>
        <div>
          <h4 className="text-sm text-[#64748B] mb-2">Recently joined</h4>
          <CPprofileCard />
          <CPprofileCard />
          <CPprofileCard />
        </div>
      </div>
    </CPModal>
  );
}

const CPsmallTab = ({ text }: { text: string }) => {
  return (
    <div className="py-2 px-3 text-sm text-[#64748B] border border-[#E2E8F0] rounded-full">
      {text}
    </div>
  );
};

const CPprofileCard = () => {
  return (
    <div className="flex gap-5 items-center p-3.5">
      <CPprofileImg />
      <div className="flex-1">
        <p className="flex gap-3 items-center">
          <span className="text-[#050505] ">Femi Johnson</span>
          <span className="text-primary font-medium py-1 px-2 bg-[#F8FAFC] rounded-full">
            Talent
          </span>
        </p>
        <p className="text-[#64748B] text-sm">
          Creative Director at the noti company
        </p>
      </div>
    </div>
  );
};
export default DashboardModals;
