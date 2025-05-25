"use client";
import CPModal from "@/components/CPModal";
import CPprofileImg from "@/components/CPprofileImg";
import CPsearchFIlterDropDown from "@/components/CPsearchFIlterDropDown";
import { SearchIcon } from "@/imagecomponents";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";
import { searchDirectory } from "./functions";
import {
  CPEmptyState,
  CPpostCard,
  CPsmallButton,
  CPspinnerLoader,
} from "@/components";
import { TSearchParams } from "./type";
import { errorMessage } from "@/utils/toastalert";

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
  } = useSWRMutation("/api/directory/", searchDirectory);
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
          <CPspinnerLoader />
        ) : !data?.length ? (
          <CPEmptyState textIcon="🔍" />
        ) : (
          <div className="mb-4">
            {data?.map((item) => {
              if (item.title) {
                return <CPpostCard key={item.id} post={item} />;
              }
              return <CPprofileCard key={item.id} />;
            })}
          </div>
        )}
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
