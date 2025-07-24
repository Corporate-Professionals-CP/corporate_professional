import CPtableListWorkExp from "@/components/CPtableListWorkExp";
import React, { useEffect, useState } from "react";
import { TVolunteering, TVolunteerSchema, VolunteerSchema } from "./type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CPInput from "@/components/CPInput";
import CPsmallButton from "@/components/CPsmallButton";
import CPEmptyState from "@/components/CPEmptyState";

import useSWR from "swr";
import { CPeducationSkeleton } from "@/components";
import { errorMessage, successMessage } from "@/utils/toastalert";
import useSWRMutation from "swr/mutation";
import { addvolunteer, deleteVolunteering, getVolunteers } from "./functions";
import CPdeleteModal from "@/components/CPdeleteModal";
import dayjs from "dayjs";

function Volunteering() {
  const { data = [], isLoading } = useSWR("/volunteering/", getVolunteers);
  const [activeData, setActiveData] = useState<null | TVolunteering>(null);
  const [addVolunteering, setAddVolunteering] = useState(false);
  return (
    <div>
      <div className="flex justify-between mb-9 ">
        <h3 className="font-medium text-lg">Volunteering</h3>
        {!addVolunteering && (
          <button
            className="text-[#050505] text-sm font-medium px-3 py-2 rounded-lg bg-[#F8FAFC] "
            onClick={() => {
              setAddVolunteering(true);
              setActiveData(null);
            }}
          >
            Add Volunteering
          </button>
        )}
      </div>
      {addVolunteering ? (
        <AddNewVolunteer
          editVolunteering={activeData}
          setAddVolunteering={setAddVolunteering}
        />
      ) : isLoading ? (
        <VolunteeringSkeleton />
      ) : (
        <ListContact
          setAddVolunteering={setAddVolunteering}
          volunteers={data}
          setActiveVolunteering={setActiveData}
        />
      )}
    </div>
  );
}

const ListContact = ({
  setActiveVolunteering,
  setAddVolunteering,
  volunteers = [],
}: {
  setActiveVolunteering: React.Dispatch<
    React.SetStateAction<null | TVolunteering>
  >;
  setAddVolunteering: React.Dispatch<React.SetStateAction<boolean>>;
  volunteers?: TVolunteering[];
}) => {
  const [deletemodal, setdeletemodal] = useState(false);
  const [activeId, setActiveId] = useState("");
  const { trigger, isMutating } = useSWRMutation(
    `/work-experiences/${activeId}`,
    deleteVolunteering
  );
  const handleDelete = async () => {
    // trigger modal
    try {
      await trigger({ id: activeId });
      successMessage("Veolunteering deleted successfully");
      setdeletemodal(false);
    } catch (err) {
      errorMessage(err);
    }
  };

  if (volunteers.length == 0) {
    return (
      <CPEmptyState
        textIcon={"🤝"}
        btnText="Add a volunteering role you had"
        action={() => setAddVolunteering(true)}
      />
    );
  }
  return (
    <>
      {volunteers.map((vol) => (
        <CPtableListWorkExp
          key={vol.id}
          left={`${dayjs(vol.start_date).format("MMM YYYY")} - ${dayjs(
            vol.end_date
          ).format("MMM YYYY")}`}
          title={vol.organization}
          location={vol.location}
          list={[vol.description]}
          onDelete={() => {
            setdeletemodal(true);
            setActiveId(vol.id);
          }}
          onEdit={() => {
            setAddVolunteering(true);
            setActiveVolunteering(vol);
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

function AddNewVolunteer({
  editVolunteering,
  setAddVolunteering,
}: {
  editVolunteering: null | TVolunteering;
  setAddVolunteering: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<TVolunteerSchema>({
    resolver: zodResolver(VolunteerSchema),
  });

  useEffect(() => {
    if (editVolunteering) {
      setValue("description", editVolunteering?.description);
      setValue("end_date", editVolunteering?.end_date);
      setValue("location", editVolunteering?.location);
      setValue("organization", editVolunteering?.organization);
      setValue("organization_url", editVolunteering?.organization_url);
      setValue("role", editVolunteering?.role);
      setValue("start_date", editVolunteering?.start_date);
    }
  }, [editVolunteering, setValue]);

  const { trigger, isMutating } = useSWRMutation(
    "/volunteering/",
    addvolunteer
  );
  const onclick = async (data: TVolunteerSchema) => {
    const editId = editVolunteering?.id || null;
    try {
      await trigger({ ...data, editId: editId });
      successMessage(
        `Volunteering ${editId ? "edited" : "added"}  successfully`
      );
      setAddVolunteering(false);
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
            error={errors.start_date?.message}
            {...register("start_date")}
          />
        </div>
        <div className="flex-1">
          <label className="text-[#475569] text-sm mb-2">To</label>
          <CPInput
            type="date"
            placeholder="22/05/2025"
            error={errors.end_date?.message}
            {...register("end_date")}
          />
        </div>
      </div>
      <div className="flex gap-2 mb-5">
        <div className="flex-1">
          <label className="text-[#475569] text-sm mb-2">Title</label>
          <CPInput
            placeholder="Volunteer, coordinator, etc"
            error={errors.role?.message}
            {...register("role")}
          />
        </div>
        <div className="flex-1">
          <label className="text-[#475569] text-sm mb-2">Organization</label>
          <CPInput
            placeholder="Non-profit org."
            error={errors.organization?.message}
            {...register("organization")}
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
            error={errors.organization_url?.message}
            {...register("organization_url")}
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
        <button onClick={() => setAddVolunteering(false)} className="p-3">
          Back
        </button>
        <CPsmallButton type="submit" text="Save" loading={isMutating} />
      </div>
    </form>
  );
}

function VolunteeringSkeleton() {
  return (
    <>
      <CPeducationSkeleton />;
      <CPeducationSkeleton />;
    </>
  );
}

export default Volunteering;
