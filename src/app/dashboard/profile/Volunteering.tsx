import CPtableListWorkExp from "@/components/CPtableListWorkExp";
import React, { useState } from "react";
import {
  TVolunteering,
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
import { errorMessage, successMessage } from "@/utils/toastalert";
import useSWRMutation from "swr/mutation";

function Volunteering() {
  const { data = [], isLoading } = useSWR("/api/contacts/", () =>
    httprequest
      .get("/api/volunteering/")
      .then((res) => res.data as TVolunteering[])
      .catch(() => [])
  );

  const [addVolunteering, setAddVolunteering] = useState(false);
  return (
    <div>
      <div className="flex justify-between mb-9 ">
        <h3 className="font-medium text-lg">Volunteering</h3>
        {!addVolunteering && (
          <button
            className="text-[#050505] text-sm font-medium px-3 py-2 rounded-lg bg-[#F8FAFC] "
            onClick={() => setAddVolunteering(true)}
          >
            Add Volunteering
          </button>
        )}
      </div>
      {addVolunteering ? (
        <AddNewVolunteer setAddVolunteering={setAddVolunteering} />
      ) : isLoading ? (
        <CPspinnerLoader size={40} />
      ) : (
        <ListContact
          setAddVolunteering={setAddVolunteering}
          volunteers={data}
        />
      )}
    </div>
  );
}

const ListContact = ({
  setAddVolunteering,
  volunteers = [],
}: {
  setAddVolunteering: React.Dispatch<React.SetStateAction<boolean>>;
  volunteers?: TVolunteering[];
}) => {
  if (volunteers.length == 0) {
    return (
      <CPEmptyState
        textIcon={"🤝"}
        btnText="Add a volunteering role you had"
        action={() => setAddVolunteering(true)}
      />
    );
  }
  return volunteers.map((vol) => (
    <CPtableListWorkExp
      key={vol.id}
      left={`${vol.start_date} ${vol.end_date}`}
      title={vol.organization}
      location={vol.location}
      list={[vol.description]}
    />
  ));
};

async function addvolunteer(
  url: string,
  { arg }: { arg: TWorkExperienceSchema }
) {
  const response = await httprequest.post("/api/volunteering/", {
    role: arg.title,
    organization: arg.company,
    // organization_url: string,
    location: arg.locatiom,
    start_date: arg.from,
    end_date: arg.to,
    // currently_volunteering: false,
    description: arg.description,
  });

  return response.data;
}

function AddNewVolunteer({
  setAddVolunteering,
}: {
  setAddVolunteering: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TWorkExperienceSchema>({
    resolver: zodResolver(WorkExperienceSchema),
  });
  const { trigger, isMutating } = useSWRMutation(
    "/api/volunteering/",
    addvolunteer
  );
  const onclick = (data: TWorkExperienceSchema) => {
    try {
      trigger(data);
      mutate("/api/contacts/");
      successMessage("Volunteering added successfully");
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
      <div className="mb-5">
        <label className="text-[#475569] text-sm mb-2">Attachments</label>
        <CPInput
          type="textarea"
          className="block bg-[#F8FAFC] w-full p-4"
          placeholder="No attachments yet"
        />
      </div>
      <div className="flex justify-end gap-2 mt-12">
        <button onClick={() => setAddVolunteering(false)} className="p-3">
          Back
        </button>
        <CPsmallButton type="submit" text="Save" loading={isMutating} />
      </div>
    </form>
  );
}

export default Volunteering;
