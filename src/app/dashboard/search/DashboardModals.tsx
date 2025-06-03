"use client";
import CPModal from "@/components/CPModal";
import CPprofileImg from "@/components/CPprofileImg";
import CPsearchFIlterDropDown from "@/components/CPsearchFIlterDropDown";
import { SearchIcon } from "@/imagecomponents";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";
import { searchDirectory } from "./functions";
import { CPEmptyState, CPpostCard, CPsmallButton } from "@/components";
import { TSearchParams } from "./type";
import { errorMessage } from "@/utils/toastalert";
import CPpostCardSkeleton from "@/components/CPpostCardSkeleton";
import CPprofileCardSkeleton from "@/components/CPprofileCardSkeleton";
import Link from "next/link";

function DashboardModals() {
  const router = useRouter();
  const handleCloseModal = () => {
    router.push("/dashboard");
  };
  const { setValue, watch, register, handleSubmit } = useForm<TSearchParams>();
  const {
    isMutating,
    trigger,
    data = [],
  } = useSWRMutation("/directory/", searchDirectory);
  const onclick = async (data: TSearchParams) => {
    try {
      await trigger(data);
    } catch (err) {
      errorMessage(err, "unable to get search information");
    }
  };
  return (
    <CPModal backgroundAction={handleCloseModal} minHeight={500}>
      <div className="p-[18]">
        <div className="flex items-center gap-[11] py-3 mb-4">
          <SearchIcon size={20} />
          <input
            placeholder="Search by name, job title, company, or industry..."
            className="text-sm flex-1"
            {...register("search")}
          />
          <CPsmallButton onClick={handleSubmit(onclick)}>Search</CPsmallButton>
        </div>
        <div className="flex flex-wrap gap-2 mb-9">
          <CPsearchFIlterDropDown
            onChange={(val: string) => setValue("role", val)}
            value={watch("role")}
            tabText="Role"
            prefix="Role"
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
            onChange={(val: string) => setValue("location", val)}
            value={watch("location")}
            prefix="Location"
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

          {/* <CPsearchFIlterDropDown
          onChange={(val: string) => setValue("industry", val)}
            value={watch("industry")}
            tabText="Has worked at"
            items={[
              { text: "Linkedin", val: "Linkedin", number: 227 },
              { text: "Twitter", val: "Twitter", number: 227 },
              { text: "X", val: "X", number: 227 },
              { text: "Email", val: "email", number: 227 },
            ]}
            placeholder="Search roles"
          /> */}

          <CPsearchFIlterDropDown
            onChange={(val: string) => setValue("industry", val)}
            value={watch("industry")}
            tabText="Industry"
            prefix="Industry"
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
            prefix="Experience"
            onChange={(val: string) => setValue("experince", val)}
            value={watch("experince")}
            items={[
              { text: "⏳ 0-2", val: "0-2 years" },
              { text: "🏆 3-5", val: "3-5 years" },
              { text: "🚀 6-10", val: "6-10 years" },
              { text: "👑 10+ ", val: "10+ years" },
            ]}
            placeholder="Search roles"
          />

          <CPsearchFIlterDropDown
            tabText="Skill"
            prefix="Skill"
            onChange={(val: string) => setValue("skill", val)}
            value={watch("skill")}
            items={[
              { text: "Linkedin", val: "Linkedin", number: 227 },
              { text: "Twitter", val: "Twitter", number: 227 },
              { text: "X", val: "X", number: 227 },
              { text: "Email", val: "email", number: 227 },
            ]}
            placeholder="Search roles"
          />
        </div>
        {isMutating ? (
          <SearchSkeleton />
        ) : !data?.length ? (
          <CPEmptyState textIcon="🔍" />
        ) : (
          <div className="mb-4">
            {data?.map((item) => {
              if (item.title) {
                return <CPpostCard key={item.id} post={item} isLink={true} />;
              }
              return <CPprofileCard key={item.id} user={item} />;
            })}
          </div>
        )}
      </div>
    </CPModal>
  );
}

const CPprofileCard = ({
  user,
}: {
  user: {
    company: string;
    full_name: string;
    id: string;
    industry: string;
    is_recruiter: boolean;
    job_title: string;
    profile_image_url: string;
  };
}) => {
  console.log(user, "user");
  return (
    <Link
      href={`/dashboard/user/${user.id}`}
      className="flex gap-5 items-center py-3.5 px-6"
    >
      <CPprofileImg full_name={user.full_name} url={user.profile_image_url} />
      <div className="flex-1">
        <p className="flex gap-3 items-center">
          <span className="text-[#050505] ">{user.full_name}</span>
          <span className="text-primary font-medium py-1 px-2 bg-[#F8FAFC] rounded-full">
            {user.is_recruiter ? "Recruiter" : "Talent"}
          </span>
        </p>
        <p className="text-[#64748B] text-sm">{user.job_title}</p>
      </div>
    </Link>
  );
};

const SearchSkeleton = () => {
  return (
    <div>
      <CPprofileCardSkeleton />
      <CPpostCardSkeleton />
      <CPprofileCardSkeleton />
      <CPpostCardSkeleton />
    </div>
  );
};

export default DashboardModals;
