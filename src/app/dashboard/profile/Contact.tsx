import CPInput from "@/components/CPInput";
import CPselect from "@/components/CPselect";
import CPsmallButton from "@/components/CPsmallButton";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ContactSchema, TContactSchema } from "./type";
import useSWRMutation from "swr/mutation";
import httprequest from "@/utils/httpRequest";
import CPEmptyState from "@/components/CPEmptyState";

const Contact = () => {
  const [addlink, setAddLink] = useState(false);
  return (
    <section>
      <div className="flex justify-between mb-9 ">
        <h3 className="font-medium text-lg">Contact</h3>
        {!addlink && (
          <button
            className="text-[#050505] text-sm font-medium px-3 py-2 rounded-lg bg-[#F8FAFC]"
            onClick={() => {
              setAddLink(true);
            }}
          >
            Add link
          </button>
        )}
      </div>
      {addlink ? (
        <AddNewContact setAddLink={setAddLink} />
      ) : (
        <ListContact setAddLink={setAddLink} />
      )}
    </section>
  );
};

const ListContact = ({
  setAddLink,
}: {
  setAddLink: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <CPEmptyState
      textIcon={"📇"}
      btnText="Add Contact"
      action={() => setAddLink(true)}
    />
  );
  return (
    <div>
      <div className="flex mb-8">
        <div className="max-w-[180] min-w-[50] flex-1">Email</div>
        <div>
          <p className="text-sm mb-4">danielanozie@icloud.com </p>
          <div className="flex items-center gap-3">
            <button className="text-xs text-[#64748B]">Edit</button>
            <button className="text-xs text-[#64748B]">Delete</button>
          </div>
        </div>
      </div>
      <div className="flex mb-8">
        <div className="max-w-[180] min-w-[50] flex-1">Email</div>
        <div>
          <p className="text-sm mb-4">danielanozie@icloud.com </p>
          <div className="flex items-center gap-3">
            <button className="text-xs text-[#64748B]">Edit</button>
            <button className="text-xs text-[#64748B]">Delete</button>
          </div>
        </div>
      </div>
      <div className="flex mb-8">
        <div className="max-w-[180] min-w-[50] flex-1">Email</div>
        <div>
          <p className="text-sm mb-4">danielanozie@icloud.com </p>
          <div className="flex items-center gap-3">
            <button className="text-xs text-[#64748B]">Edit</button>
            <button className="text-xs text-[#64748B]">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

async function addcontact(url: string, { arg }: { arg: TContactSchema }) {
  await httprequest.post("contact", {
    type: arg.type,
  });
}
const options = {
  onError: () => {},
  onSuccess: () => {},
};
const AddNewContact = ({
  setAddLink,
}: {
  setAddLink: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const {
    register,
    formState: { errors },
    setValue,
    watch,
    handleSubmit,
  } = useForm<TContactSchema>({ resolver: zodResolver(ContactSchema) });
  const {
    trigger,
    isMutating,
    // error,
  } = useSWRMutation("contact", addcontact, options);
  const onClick = (val: TContactSchema) => {
    trigger(val);
  };
  return (
    <form onSubmit={handleSubmit(onClick)}>
      <div>
        <label className="mb-2 text-sm text-[#475569]">Type</label>
        <div className="flex gap-2">
          <CPselect
            items={[
              { text: "Linkedin", val: "Linkedin" },
              { text: "Twitter", val: "Twitter" },
              { text: "X", val: "X" },
              { text: "Email", val: "email" },
            ]}
            onChange={(val: string) => setValue("type", val)}
            value={watch("type")}
            error={errors.type?.message}
          />
          <CPInput
            placeholder="username"
            error={errors.username?.message}
            {...register("username")}
          />
        </div>
      </div>
      <div>
        <label className="mb-2 text-sm text-[#475569]">URL</label>
        <CPInput
          placeholder="https://linkedin.com/wade"
          {...register("url")}
          error={errors.url?.message}
        />
      </div>
      <div className="flex justify-end gap-2 mt-12">
        <button onClick={() => setAddLink(false)} className="p-3">
          Back
        </button>
        <CPsmallButton type="submit" text="Save" loading={isMutating} />
      </div>
    </form>
  );
};

export default Contact;
