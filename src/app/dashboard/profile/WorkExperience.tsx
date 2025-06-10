import dayjs from "dayjs";
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
import useSWR from "swr";
import { CPeducationSkeleton } from "@/components";
import useSWRMutation from "swr/mutation";
import { errorMessage, successMessage } from "@/utils/toastalert";
import {
  addexperience,
  deleteWorkExperience,
  getWorkExperience,
} from "./functions";
import CPdeleteModal from "@/components/CPdeleteModal";

const WorkExperience = () => {
  const { data = [], isLoading } = useSWR(
    "/work-experiences/",
    getWorkExperience
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
        <WorkExperienceSkeleton />
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
  const [deletemodal, setdeletemodal] = useState(false);
  const [activeId, setActiveId] = useState("");
  const { trigger, isMutating } = useSWRMutation(
    `/work-experiences/${activeId}`,
    deleteWorkExperience
  );
  const handleDelete = async () => {
    // trigger modal
    try {
      await trigger({ id: activeId });
      successMessage("work experience deleted successfully");
      setdeletemodal(false);
    } catch (err) {
      errorMessage(err);
    }
  };

  if (experiences.length == 0) {
    return (
      <CPEmptyState
        textIcon={"💼"}
        btnText="Add workplace"
        action={() => setAddExperience(true)}
      />
    );
  }

  return (
    <>
      {experiences.map((exp) => (
        <CPtableListWorkExp
          key={exp.id}
          left={`${dayjs(exp.start_date).format("MMM YYYY")} - ${dayjs(
            exp.end_date
          ).format("MMM YYYY")}`}
          title={exp.title}
          location={exp.location}
          list={[exp.description]}
          onDelete={() => {
            setdeletemodal(true);
            setActiveId(exp.id);
          }}
        />
      ))}
      {deletemodal && (
        <CPdeleteModal
          onClose={() => setdeletemodal(false)}
          onDelete={handleDelete}
          isLoading={isMutating}
        />
      )}
    </>
  );
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
    "/work-experiences/",
    addexperience
  );
  const onClick = async (data: TWorkExperienceSchema) => {
    try {
      await trigger(data);
      successMessage("Work Experience added successfully");
      setAddExperience(false);
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
            type="date"
            placeholder="22/05/2025"
            error={errors.from?.message}
            {...register("from")}
          />
        </div>
        <div className="flex-1">
          <label className="text-[#475569] text-sm mb-2">To</label>
          <CPInput
            type="date"
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
            error={errors.location?.message}
            {...register("location")}
          />
        </div>
        <div className="flex-1">
          <label className="text-[#475569] text-sm mb-2">URL</label>
          <CPInput
            placeholder="https://example.com"
            error={errors.url?.message}
            {...register("url")}
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
      {/* <div className="mb-5">
        <label className="text-[#475569] text-sm mb-2">Attachments</label>
        <CPInput
          type="textarea"
          className="block bg-[#F8FAFC] w-full p-4"
          placeholder="No attachments yet"
        />
      </div> */}
      <div className="flex justify-end gap-2 mt-12">
        <button className="p-3" onClick={() => setAddExperience(false)}>
          Back
        </button>
        <CPsmallButton type="submit" text="Save" loading={isMutating} />
      </div>
    </form>
  );
}

function WorkExperienceSkeleton() {
  return (
    <>
      <CPeducationSkeleton />;
      <CPeducationSkeleton />;
    </>
  );
}
export default WorkExperience;
