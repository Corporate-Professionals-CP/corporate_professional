"use client";
import Cpdiscoverability from "@/components/Cpdiscoverability";
import CPsmallButton from "@/components/CPsmallButton";
import CPSupportCard from "@/components/CPSupportCard";
import RightSectionContainer from "./RightSectionContainer";
import useUser from "@/statestore/useUser";

function RightSection() {
  const user = useUser((state) => state.user);
  const sections = Object.values(user?.sections || {});
  const sectionlength = sections.length;
  const completedSections = sections.filter((val) => val.completed).length;
  return (
    <RightSectionContainer>
      <div className="p-4 rounded-2xl shadow-[0px_12px_16px_-4px_#1018280A,0px_4px_6px_-2px_#10182808]">
        <div className="flex justify-between items-start mb-6">
          <h3 className="font-medium text-lg">Account setup</h3>
          <div>
            <span className="text-xs text-[#475569]">
              {completedSections}/{sectionlength} completed
            </span>
            <div className="block w-full bg-[#F1F5F9] rounded-2xl">
              <span
                style={{
                  width: `${(completedSections * 100) / sectionlength}%`,
                }}
                className="block bg-primary h-1 rounded-2xl"
              ></span>
            </div>
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
            completed={!!user?.sections?.location?.completed}
          />
          <CPcard
            title="Education & Certifications"
            description="Strengthen your credibility."
            link="/dashboard/profile"
            icon="📜"
            completed={!!user?.sections?.education?.completed}
          />
          <CPcard
            title="Link your LinkedIn"
            description="Expand your professional reach."
            link="/dashboard/profile"
            icon="🔗"
            completed={!!user?.sections?.bio?.completed}
          />
          <CPcard
            title="Add your skills"
            description="Showcase what you excel at."
            link="/dashboard/profile"
            icon="🏅"
            completed={!!user?.sections?.skills?.completed}
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
  completed = false,
}: {
  title: string;
  description: string;
  link: string;
  icon: string;
  completed: boolean;
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
      {completed ? (
        <div className="py-2 px-3 bg-[#F8FAFC] rounded-full">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.7045 4.55337C17.034 4.8044 17.0976 5.275 16.8466 5.60447L8.84657 16.1045C8.71541 16.2766 8.51627 16.3837 8.30033 16.3983C8.08439 16.4128 7.87271 16.3333 7.71967 16.1803L3.21967 11.6803C2.92678 11.3874 2.92678 10.9125 3.21967 10.6196C3.51256 10.3267 3.98744 10.3267 4.28033 10.6196L8.17351 14.5128L15.6534 4.69541C15.9045 4.36593 16.3751 4.30234 16.7045 4.55337Z"
              fill="#7074FF"
            />
          </svg>
        </div>
      ) : (
        <CPsmallButton
          style={{ padding: "8px 12px" }}
          text="Add"
          isLink={link}
        />
      )}
    </div>
  );
};

export default RightSection;
