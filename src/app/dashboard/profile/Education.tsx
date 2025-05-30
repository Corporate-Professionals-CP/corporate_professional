import CPtableListWorkExp from "@/components/CPtableListWorkExp";
import React, { useState } from "react";
import { EducationSchema, TEducation, TEducationSchema } from "./type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CPInput from "@/components/CPInput";
import CPsmallButton from "@/components/CPsmallButton";
import CPEmptyState from "@/components/CPEmptyState";
import useSWR from "swr";
import { CPeducationSkeleton } from "@/components";
import useSWRMutation from "swr/mutation";
import { errorMessage, successMessage } from "@/utils/toastalert";
import { addEducation, deleteEducation, getEducations } from "./functions";
import CPdeleteModal from "@/components/CPdeleteModal";

function Education() {
  const { data = [], isLoading } = useSWR("/education/me", getEducations);
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
        <EducationSkeleton />
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
  const [deletemodal, setdeletemodal] = useState(false);
  const [activeId, setActiveId] = useState("");
  const { trigger, isMutating } = useSWRMutation(
    `/education/${activeId}`,
    deleteEducation
  );
  const handleDelete = async () => {
    // trigger modal
    try {
      await trigger({ id: activeId });
      successMessage("Education deleted successfully");
      setdeletemodal(false);
    } catch (err) {
      errorMessage(err);
    }
  };

  if (educations.length == 0) {
    return (
      <CPEmptyState
        textIcon={"🎓"}
        btnText="Add education"
        action={() => setAddEduction(true)}
      />
    );
  }
  return (
    <>
      {educations.map((edu) => (
        <CPtableListWorkExp
          key={edu.id}
          left={`${edu.from_date} - ${edu.to_date}`}
          title={edu.school}
          location={edu.location}
          list={[edu.description]}
          onDelete={() => {
            setdeletemodal(true);

            setActiveId(edu.id);
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

function AddNewEduction({
  setAddEduction,
}: {
  setAddEduction: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TEducationSchema>({
    resolver: zodResolver(EducationSchema),
  });
  const { trigger, isMutating } = useSWRMutation("/education/", addEducation);
  const onclick = async (data: TEducationSchema) => {
    try {
      await trigger(data);
      successMessage("Education added successfully");
      setAddEduction(false);
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
            type="date"
            placeholder="22/05/2025"
            error={errors.from_date?.message}
            {...register("from_date")}
          />
        </div>
        <div className="flex-1">
          <label className="text-[#475569] text-sm mb-2">To</label>
          <CPInput
            type="date"
            placeholder="22/05/2025"
            error={errors.to_date?.message}
            {...register("to_date")}
          />
        </div>
      </div>
      <div className="flex gap-2 mb-5">
        <div className="flex-1">
          <label className="text-[#475569] text-sm mb-2">
            Degree or certification
          </label>
          <CPInput
            placeholder="Bachelor of design"
            error={errors.degree?.message}
            {...register("degree")}
          />
        </div>
        <div className="flex-1">
          <label className="text-[#475569] text-sm mb-2">
            School or institution*
          </label>
          <CPInput
            placeholder="University"
            error={errors.school?.message}
            {...register("school")}
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
        <button onClick={() => setAddEduction(false)} className="p-3">
          Back
        </button>
        <CPsmallButton type="submit" text="Save" loading={isMutating} />
      </div>
    </form>
  );
}

function EducationSkeleton() {
  return (
    <>
      <CPeducationSkeleton />;
      <CPeducationSkeleton />;
    </>
  );
}

export default Education;
