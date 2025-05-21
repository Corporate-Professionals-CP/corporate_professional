import CPtableListWorkExp from "@/components/CPtableListWorkExp";
import React, { useState } from "react";
import {
  TCertification,
  TWorkExperienceSchema,
  WorkExperienceSchema,
} from "./type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CPInput from "@/components/CPInput";
import CPsmallButton from "@/components/CPsmallButton";
import CPEmptyState from "@/components/CPEmptyState";
import useSWR, { mutate } from "swr";
import httprequest from "@/utils/httpRequest";
import useSWRMutation from "swr/mutation";
import { errorMessage, successMessage } from "@/utils/toastalert";
import CPspinnerLoader from "@/components/CPspinnerLoader";

function Certifications() {
  const { data = [], isLoading } = useSWR("/api/certification/me", () =>
    httprequest
      .get("/api/certification/me")
      .then((res) => res.data as TCertification[])
      .catch(() => [])
  );

  const [addCertifications, setAddCertifications] = useState(false);
  return (
    <div>
      <div className="flex justify-between mb-9 ">
        <h3 className="font-medium text-lg">Certification</h3>
        {!addCertifications && (
          <button
            className="text-[#050505] text-sm font-medium px-3 py-2 rounded-lg bg-[#F8FAFC] "
            onClick={() => setAddCertifications(true)}
          >
            Add Certification
          </button>
        )}
      </div>
      {addCertifications ? (
        <AddNewCertification setAddCertifications={setAddCertifications} />
      ) : isLoading ? (
        <CPspinnerLoader size={40} />
      ) : (
        <ListContact
          setAddCertifications={setAddCertifications}
          certifications={data}
        />
      )}
    </div>
  );
}

const ListContact = ({
  setAddCertifications,
  certifications,
}: {
  setAddCertifications: React.Dispatch<React.SetStateAction<boolean>>;
  certifications: TCertification[];
}) => {
  if (certifications.length == 0) {
    return (
      <CPEmptyState
        textIcon={"📜"}
        btnText="Add a certificate you have"
        action={() => setAddCertifications(true)}
      />
    );
  }

  return certifications.map((item) => (
    <CPtableListWorkExp
      key={item.id}
      left={`${item.issued_date} - ${item.expiration_date}`}
      title={item.name}
      location={item.organization}
      link={item.media_url}
      list={[item.description]}
    />
  ));
};

const submitCertification = async (
  url: string,
  { arg }: { arg: TWorkExperienceSchema }
) => {
  const response = await httprequest.post("/api/certification/", {
    name: arg.title,
    organization: arg.company,
    url: arg.url,
    description: arg.description,
    media_url: arg.url,
    issued_date: arg.from,
    expiration_date: arg.to,
  });
  mutate("/api/certification/me");
  return response.data;
};

function AddNewCertification({
  setAddCertifications,
}: {
  setAddCertifications: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TWorkExperienceSchema>({
    resolver: zodResolver(WorkExperienceSchema),
  });
  const { trigger, isMutating } = useSWRMutation(
    "/api/certification",
    submitCertification
  );
  const onSubmit = async (data: TWorkExperienceSchema) => {
    try {
      await trigger(data);
      successMessage("Certification added");
      setAddCertifications(false);
    } catch (err) {
      errorMessage(err);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        <button onClick={() => setAddCertifications(false)} className="p-3">
          Back
        </button>
        <CPsmallButton type="submit" text="Save" loading={isMutating} />
      </div>
    </form>
  );
}

export default Certifications;
