import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ContactSchema, TContact, TContactSchema } from "./type";
import useSWRMutation from "swr/mutation";
import httprequest from "@/utils/httpRequest";
import useSWR, { mutate } from "swr";
import {
  CPspinnerLoader,
  CPEmptyState,
  CPsmallButton,
  CPselect,
  CPInput,
} from "@/components";
import { errorMessage, successMessage } from "@/utils/toastalert";

const Contact = () => {
  const { data = [], isLoading } = useSWR("/contacts/", () =>
    httprequest
      .get("/contacts/")
      .then((res) => res.data as TContact[])
      .catch(() => [])
  );

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
      ) : isLoading ? (
        <CPspinnerLoader size={40} />
      ) : (
        <ListContact setAddLink={setAddLink} contacts={data} />
      )}
    </section>
  );
};

const ListContact = ({
  setAddLink,
  contacts = [],
}: {
  setAddLink: React.Dispatch<React.SetStateAction<boolean>>;
  contacts?: TContact[];
}) => {
  if (contacts.length == 0) {
    return (
      <CPEmptyState
        textIcon={"📇"}
        btnText="Add Contact"
        action={() => setAddLink(true)}
      />
    );
  }

  return contacts.map((contact) => (
    <CPcontact key={contact.id} contact={contact} />
  ));
};

async function addcontact(url: string, { arg }: { arg: TContactSchema }) {
  const response = await httprequest.post("/api/contacts/", {
    type: arg.type,
    platform_name: arg.type,
    username: arg.username,
    url: arg.url,
  });

  return response.data;
}

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
  const { trigger, isMutating } = useSWRMutation(
    "/api/contacts/post",
    addcontact
  );
  const onClick = (val: TContactSchema) => {
    try {
      trigger(val);
      mutate("/api/contacts/");
      successMessage("Contact added successfully");
    } catch (err) {
      errorMessage(err);
    }
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

const CPcontact = ({ contact }: { contact: TContact }) => {
  const handleDelete = async () => {
    try {
      await httprequest.delete(`/api/contacts/${contact.id}`);
      mutate("/api/contacts");
      successMessage("contact deleted successfully");
    } catch (err) {
      errorMessage(err);
    }
  };

  return (
    <div key={contact.id} className="flex mb-8">
      <div className="max-w-[180] min-w-[50] flex-1">
        {contact.platform_name}
      </div>
      <div>
        <p className="text-sm mb-4">{contact.url}</p>
        <div className="flex items-center gap-3">
          {/* <button className="text-xs text-[#64748B]">Edit</button> */}
          <button className="text-xs text-[#64748B]" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
