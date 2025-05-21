import CPtableListWorkExp from "@/components/CPtableListWorkExp";
import React, { useState } from "react";
import {
  TEducation,
  TWorkExperienceSchema,
  WorkExperienceSchema,
} from "./type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CPInput from "@/components/CPInput";
import CPsmallButton from "@/components/CPsmallButton";
import CPEmptyState from "@/components/CPEmptyState";
import httprequest from "@/utils/httpRequest";
import useSWR, { mutate } from "swr";
import { CPspinnerLoader } from "@/components";
import useSWRMutation from "swr/mutation";
import { errorMessage, successMessage } from "@/utils/toastalert";

function Education() {
  const { data = [], isLoading } = useSWR("/education/me", () =>
    httprequest
      .get("/education/me")
      .then((res) => res.data as TEducation[])
      .catch(() => [])
  );
  const [addEduction, setAddEduction] = useState(false);
  return (
    <div>
      <div className="flex justify-between mb-9 ">
        <h3 className="font-medium text-lg">Education</h3>
        {!addEduction && (
          <button
            className="text-[#050505] text-sm font-medium px-3 py-2 rounded-lg bg-[#F8FAFC] "
            onClick={() => setAddEduction(true)}
          >
            Add Education
          </button>
        )}
      </div>
      {addEduction ? (
        <AddNewEduction setAddEduction={setAddEduction} />
      ) : isLoading ? (
        <CPspinnerLoader size={40} />
      ) : (
        <ListContact setAddEduction={setAddEduction} educations={data} />
      )}
    </div>
  );
}

const ListContact = ({
  setAddEduction,
  educations = [],
}: {
  setAddEduction: React.Dispatch<React.SetStateAction<boolean>>;
  educations?: TEducation[];
}) => {
  if (educations.length == 0) {
    return (
      <CPEmptyState
        textIcon={"🎓"}
        btnText="Add education"
        action={() => setAddEduction(true)}
      />
    );
  }
  return educations.map((edu) => (
    <CPtableListWorkExp
      key={edu.id}
      left="2023 - 2024"
      title="Head of Strategy at Refresh Studio"
      location="Remote"
      list={[
        "Refresh is a remote team of curious thinkers, designers and strategists helping brands to define their future.",
      ]}
    />
  ));
};

async function addEducation(
  url: string,
  { arg }: { arg: TWorkExperienceSchema }
) {
  const response = await httprequest.post("/api/education/", {
    degree: arg.company,
    school: arg.company,
    location: arg.locatiom,
    url: arg.url,
    description: arg.description,
    media_url: arg.url,
    from_date: arg.from,
    to_date: arg.to,
  });

  return response.data;
}

function AddNewEduction({
  setAddEduction,
}: {
  setAddEduction: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TWorkExperienceSchema>({
    resolver: zodResolver(WorkExperienceSchema),
  });
  const { trigger, isMutating } = useSWRMutation(
    "/api/contacts/post",
    addEducation
  );
  const onclick = (data: TWorkExperienceSchema) => {
    try {
      trigger(data);
      successMessage("Education added successfully");
      mutate("/api/education/me");
    } catch (err) {
      errorMessage(err);
    }
  };
  return (
    <form onSubmit={handleSubmit(onclick)}>
      <div className="flex gap-2 mb-5">
        <div className="flex-1">
          <label className="text-[#475569] text-sm mb-2">From</label>
          <CPInput
            placeholder="22/05/2025"
            error={errors.from?.message}
            {...register("from")}
          />
        </div>
        <div className="flex-1">
          <label className="text-[#475569] text-sm mb-2">To</label>
          <CPInput
            placeholder="22/05/2025"
            error={errors.to?.message}
            {...register("to")}
          />
        </div>
      </div>
      <div className="flex gap-2 mb-5">
        <div className="flex-1">
          <label className="text-[#475569] text-sm mb-2">Title</label>
          <CPInput
            placeholder="Product designer etc"
            error={errors.title?.message}
            {...register("title")}
          />
        </div>
        <div className="flex-1">
          <label className="text-[#475569] text-sm mb-2">Company</label>
          <CPInput
            placeholder="The noti company"
            error={errors.company?.message}
            {...register("company")}
          />
        </div>
      </div>
      <div className="flex gap-2 mb-5">
        <div className="flex-1">
          <label className="text-[#475569] text-sm mb-2">Location</label>
          <CPInput
            placeholder="Where was it"
            error={errors.locatiom?.message}
            {...register("url")}
          />
        </div>
        <div className="flex-1">
          <label className="text-[#475569] text-sm mb-2">URL</label>
          <CPInput
            placeholder="https://example.com"
            // error={errors.username?.message}
            // {...register("username")}
          />
        </div>
      </div>
      <div className="mb-5">
        <label className="text-[#475569] text-sm mb-2">Description</label>
        <CPInput
          type="textarea"
          className="block bg-[#F8FAFC] w-full p-4"
          placeholder="Add some details"
          error={errors.description?.message}
          {...register("description")}
        />
      </div>
      <div className="mb-5">
        <label className="text-[#475569] text-sm mb-2">Attachments</label>
        <CPInput
          type="textarea"
          className="block bg-[#F8FAFC] w-full p-4"
          placeholder="No attachments yet"
        />
      </div>
      <div className="flex justify-end gap-2 mt-12">
        <button onClick={() => setAddEduction(false)} className="p-3">
          Back
        </button>
        <CPsmallButton type="submit" text="Save" loading={isMutating} />
      </div>
    </form>
  );
}

export default Education;
