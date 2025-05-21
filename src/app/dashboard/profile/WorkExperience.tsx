import CPInput from "@/components/CPInput";
import CPsmallButton from "@/components/CPsmallButton";
import CPtableListWorkExp from "@/components/CPtableListWorkExp";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  TWorkExperience,
  TWorkExperienceSchema,
  WorkExperienceSchema,
} from "./type";
import CPEmptyState from "@/components/CPEmptyState";
import useSWR, { mutate } from "swr";
import httprequest from "@/utils/httpRequest";
import { CPspinnerLoader } from "@/components";
import useSWRMutation from "swr/mutation";
import { errorMessage, successMessage } from "@/utils/toastalert";

const WorkExperience = () => {
  const { data = [], isLoading } = useSWR("/api/work-experiences/", () =>
    httprequest
      .get("/api/work-experiences/")
      .then((res) => res.data as TWorkExperience[])
      .catch(() => [])
  );

  const [addExperience, setAddExperience] = useState(false);
  return (
    <div>
      <div className="flex justify-between mb-9 ">
        <h3 className="font-medium text-lg">Work Experience</h3>
        {!addExperience && (
          <button
            className="text-[#050505] text-sm font-medium px-3 py-2 rounded-lg bg-[#F8FAFC] "
            onClick={() => setAddExperience(true)}
          >
            Add workplace
          </button>
        )}
      </div>
      {addExperience ? (
        <AddNewExperience setAddExperience={setAddExperience} />
      ) : isLoading ? (
        <CPspinnerLoader size={40} />
      ) : (
        <ListContact setAddExperience={setAddExperience} experiences={data} />
      )}
    </div>
  );
};

const ListContact = ({
  setAddExperience,
  experiences = [],
}: {
  setAddExperience: React.Dispatch<React.SetStateAction<boolean>>;

  experiences?: TWorkExperience[];
}) => {
  if (experiences.length == 0) {
    return (
      <CPEmptyState
        textIcon={"💼"}
        btnText="Add workplace"
        action={() => setAddExperience(true)}
      />
    );
  }
  return experiences.map((exp) => (
    <CPtableListWorkExp
      key={exp.id}
      left={`${exp.start_date} - ${exp.end_date}`}
      title={exp.title}
      location={exp.location}
      list={[
        "Refresh is a remote team of curious thinkers, designers and strategists helping brands to define their future.",
      ]}
    />
  ));
};

const addexperience = async (
  url: string,
  { arg }: { arg: TWorkExperienceSchema }
) => {
  const response = await httprequest.post("/api/work-experiences/", {
    title: arg.title,
    company: arg.company,
    company_url: arg.url,
    location: arg.locatiom,
    // employment_type: ,
    start_date: arg.from,
    end_date: arg.to,
    // currently_working: false,
    description: arg.description,
    // achievements: string
  });
  return response.data;
};

function AddNewExperience({
  setAddExperience,
}: {
  setAddExperience: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TWorkExperienceSchema>({
    resolver: zodResolver(WorkExperienceSchema),
  });
  const { trigger, isMutating } = useSWRMutation(
    "/api/work-experiences/post",
    addexperience
  );
  const onClick = (data: TWorkExperienceSchema) => {
    try {
      trigger(data);
      mutate("/api/work-experiences/");
      successMessage("Work Experience added successfully");
    } catch (err) {
      errorMessage(err);
    }
  };
  return (
    <form onSubmit={handleSubmit(onClick)}>
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
        <button className="p-3" onClick={() => setAddExperience(false)}>
          Back
        </button>
        <CPsmallButton type="submit" text="Save" loading={isMutating} />
      </div>
    </form>
  );
}
export default WorkExperience;
