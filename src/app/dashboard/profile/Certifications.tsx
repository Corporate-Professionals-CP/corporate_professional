import CPtableListWorkExp from "@/components/CPtableListWorkExp";
import React, { useState } from "react";
import {
  CertificationSchema,
  TCertification,
  TCertificationSchema,
} from "./type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CPInput from "@/components/CPInput";
import CPsmallButton from "@/components/CPsmallButton";
import CPEmptyState from "@/components/CPEmptyState";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { errorMessage, successMessage } from "@/utils/toastalert";
import {
  deleteCertification,
  getCertifications,
  submitCertification,
} from "./functions";
import { CPeducationSkeleton } from "@/components";
import CPdeleteModal from "@/components/CPdeleteModal";
import dayjs from "dayjs";

function Certifications() {
  const { data = [], isLoading } = useSWR(
    "/certification/me",
    getCertifications
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
        <CertificationSkeleton />
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
  const [deletemodal, setdeletemodal] = useState(false);
  const [activeId, setActiveId] = useState("");
  const { trigger, isMutating } = useSWRMutation(
    `/certification/${activeId}`,
    deleteCertification
  );
  const handleDelete = async () => {
    try {
      await trigger({ id: activeId });
      successMessage("Certification deleted successfully");
      setdeletemodal(false);
    } catch (err) {
      errorMessage(err);
    }
  };
  if (certifications.length == 0) {
    return (
      <CPEmptyState
        textIcon={"📜"}
        btnText="Add a certificate you have"
        action={() => setAddCertifications(true)}
      />
    );
  }

  return (
    <>
      {certifications.map((item) => (
        <CPtableListWorkExp
          key={item.id}
          left={`${dayjs(item.issued_date).format("DD MMM YYYY")} - ${dayjs(
            item.expiration_date
          ).format("DD MMM YYYY")}`}
          title={item.name}
          location={item.organization}
          link={item.media_url}
          list={[item.description]}
          onDelete={() => {
            setdeletemodal(true);

            setActiveId(item.id);
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

function AddNewCertification({
  setAddCertifications,
}: {
  setAddCertifications: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TCertificationSchema>({
    resolver: zodResolver(CertificationSchema),
  });
  const { trigger, isMutating } = useSWRMutation(
    "/certification/",
    submitCertification
  );
  const onSubmit = async (data: TCertificationSchema) => {
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
          <label className="text-[#475569] text-sm mb-2">Issue</label>
          <CPInput
            type="date"
            placeholder="22/05/2025"
            error={errors.issued_date?.message}
            {...register("issued_date")}
          />
        </div>
        <div className="flex-1">
          <label className="text-[#475569] text-sm mb-2">Expires</label>
          <CPInput
            type="date"
            placeholder="22/05/2025"
            error={errors.expiration_date?.message}
            {...register("expiration_date")}
          />
        </div>
      </div>
      <div className="flex gap-2 mb-5">
        <div className="flex-1">
          <label className="text-[#475569] text-sm mb-2">Name</label>
          <CPInput
            placeholder="My certificate"
            error={errors.name?.message}
            {...register("name")}
          />
        </div>
        <div className="flex-1">
          <label className="text-[#475569] text-sm mb-2">Organization</label>
          <CPInput
            placeholder="Issuing organization"
            error={errors.organization?.message}
            {...register("organization")}
          />
        </div>
      </div>
      <div className="flex gap-2 mb-5">
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
        <button onClick={() => setAddCertifications(false)} className="p-3">
          Back
        </button>
        <CPsmallButton type="submit" text="Save" loading={isMutating} />
      </div>
    </form>
  );
}

function CertificationSkeleton() {
  return (
    <>
      <CPeducationSkeleton />;
      <CPeducationSkeleton />;
    </>
  );
}

export default Certifications;
