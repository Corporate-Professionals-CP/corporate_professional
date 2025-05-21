"use client";
import CPModal from "@/components/CPModal";
import CPprofileImg from "@/components/CPprofileImg";
import CPsearchFIlterDropDown from "@/components/CPsearchFIlterDropDown";
import { SearchIcon } from "@/imagecomponents";
import { useRouter } from "next/navigation";

function DashboardModals() {
  const router = useRouter();
  const handleCloseModal = () => {
    router.push("/dashboard");
  };
  return (
    <CPModal backgroundAction={handleCloseModal}>
      <div className="p-[18]">
        <div className="flex items-center gap-[11] py-3 mb-4">
          <SearchIcon size={20} />
          <input
            placeholder="Search by name, job title, company, or industry..."
            className="text-sm flex-1"
          />
        </div>
        <div className="flex flex-wrap gap-2 mb-9">
          <CPsearchFIlterDropDown
            tabText="Role"
            items={[
              { text: "Product Designer", val: "Product Designe", number: 237 },
              {
                text: "Senior Product Designer",
                val: "Senior Product Designer",
                number: 12,
              },
              {
                text: "Graphics Designer",
                val: "Graphics Designer",
                number: 1542,
              },
              { text: "UX Designer", val: "UX Designer", number: 12 },
              { text: "UI Designer", val: "UI Designer", number: 12 },
              { text: "UI/UX Designer", val: "UI/UX Designer", number: 12 },
              {
                text: "Software Engineer",
                val: "Software Engineer",
                number: 309,
              },
            ]}
            placeholder="Search roles"
          />
          <CPsearchFIlterDropDown
            tabText="Location"
            items={[
              { text: "United States", val: "United States", number: 237 },
              {
                text: "California, United States",
                val: "California, United States",
                number: 12,
              },
              {
                text: "New York, United States",
                val: "New York, United States",
                number: 1542,
              },
              { text: "United Kingdom", val: "United Kingdom", number: 12 },
              { text: "Canada", val: "Canada", number: 765 },
              { text: "London, England", val: "London, England", number: 289 },
              { text: "Brazil", val: "Brazil", number: 309 },
            ]}
            placeholder="Search cities or countries"
          />

          <CPsearchFIlterDropDown
            tabText="Has worked at"
            items={[
              { text: "Linkedin", val: "Linkedin", number: 227 },
              { text: "Twitter", val: "Twitter", number: 227 },
              { text: "X", val: "X", number: 227 },
              { text: "Email", val: "email", number: 227 },
            ]}
            placeholder="Search roles"
          />

          <CPsearchFIlterDropDown
            tabText="Industry"
            items={[
              { text: "Linkedin", val: "Linkedin", number: 227 },
              { text: "Twitter", val: "Twitter", number: 227 },
              { text: "X", val: "X", number: 227 },
              { text: "Email", val: "email", number: 227 },
            ]}
            placeholder="Search roles"
          />

          <CPsearchFIlterDropDown
            tabText="Years of experience"
            items={[
              { text: "Linkedin", val: "Linkedin", number: 227 },
              { text: "Twitter", val: "Twitter", number: 227 },
              { text: "X", val: "X", number: 227 },
              { text: "Email", val: "email", number: 227 },
            ]}
            placeholder="Search roles"
          />

          <CPsearchFIlterDropDown
            tabText="Skill"
            items={[
              { text: "Linkedin", val: "Linkedin", number: 227 },
              { text: "Twitter", val: "Twitter", number: 227 },
              { text: "X", val: "X", number: 227 },
              { text: "Email", val: "email", number: 227 },
            ]}
            placeholder="Search roles"
          />
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
