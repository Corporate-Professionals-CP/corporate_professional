import Cpdiscoverability from "@/components/Cpdiscoverability";
import CPsmallButton from "@/components/CPsmallButton";
import CPSupportCard from "@/components/CPSupportCard";
import RightSectionContainer from "./RightSectionContainer";

function RightSection() {
  return (
    <RightSectionContainer>
      <div className="p-4 rounded-2xl shadow-[0px_12px_16px_-4px_#1018280A,0px_4px_6px_-2px_#10182808]">
        <div className="flex justify-between items-start mb-6">
          <h3 className="font-medium text-lg">Account setup</h3>
          <div>
            <span className="text-xs text-[#475569]">0/4 completed</span>
            <span className="block w-full bg-primary h-1 rounded-2xl"></span>
          </div>
        </div>
        <Cpdiscoverability />
        <div>
          <div className="h-[120] bg-[#F8FAFC] rounded-xl mb-3"></div>
          <p className="text-[#64748B] text-sm">
            To completely setup your account, complete these steps below:
          </p>
        </div>
        <div className="flex flex-col gap-2 mb-12">
          <CPcard
            title="Location"
            description="Connect with nearby professionals."
            link="/dashboard/profile"
            icon="📍"
          />
          <CPcard
            title="Education & Certifications"
            description="Strengthen your credibility."
            link="/dashboard/profile"
            icon="📜"
          />
          <CPcard
            title="Link your LinkedIn"
            description="Expand your professional reach."
            link="/dashboard/profile"
            icon="🔗"
          />
          <CPcard
            title="Add your skills"
            description="Showcase what you excel at."
            link="/dashboard/profile"
            icon="🏅"
          />
        </div>
        <CPSupportCard />
      </div>
    </RightSectionContainer>
  );
}

const CPcard = ({
  title,
  description,
  link,
  icon,
}: {
  title: string;
  description: string;
  link: string;
  icon: string;
}) => {
  return (
    <div className="flex gap-2 items-center p-3 border border-[#F1F5F9] rounded-md ">
      <div className="bg-[#F8FAFC] w-6 h-6 grid place-content-center rounded-2xl">
        {icon}
      </div>
      <div className="flex-1">
        <h6 className="text-[#050505] text-sm ">{title}</h6>
        <p className="text-[#475569] text-xs">{description}</p>
      </div>
      <CPsmallButton style={{ padding: "8px 12px" }} text="Add" isLink={link} />
    </div>
  );
};

export default RightSection;
