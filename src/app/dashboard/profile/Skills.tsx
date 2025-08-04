import React, { Fragment, useState } from "react";
import { SkillsSchema, TSkill, TSkillsSchema } from "./type";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
// import CPInput from "@/components/CPInput";
import CPsmallButton from "@/components/CPsmallButton";
import CPEmptyState from "@/components/CPEmptyState";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { addskills, deleteskills, getskills } from "./functions";
import { errorMessage, successMessage } from "@/utils/toastalert";
import CPpillet from "@/components/CPpillet";
import Skeleton from "react-loading-skeleton";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { skillsList } from "@/utils";

function Skills() {
  const { data = [], isLoading } = useSWR("/skill/", getskills);
  const [addSkills, setAddSkills] = useState(false);
  return (
    <div>
      <div className="flex justify-between mb-9 ">
        <h3 className="font-medium text-lg">Skills</h3>
        {!addSkills && (
          <button
            className="text-[#050505] text-sm font-medium px-3 py-2 rounded-lg bg-[#F8FAFC] "
            onClick={() => setAddSkills(true)}
          >
            Add Skills
          </button>
        )}
      </div>
      {addSkills ? (
        <AddNewSkillsTwo setAddSkills={setAddSkills} />
      ) : isLoading ? (
        <SkillSkeleton />
      ) : (
        <ListContact setAddSkills={setAddSkills} skills={data} />
      )}
    </div>
  );
}

const ListContact = ({
  setAddSkills,
  skills = [],
}: {
  setAddSkills: React.Dispatch<React.SetStateAction<boolean>>;
  skills?: TSkill[];
}) => {
  const { trigger } = useSWRMutation(`/skill/`, deleteskills);
  const handleDelete = async (id: number) => {
    // trigger modal
    try {
      await trigger({ id: id });
      successMessage("Skill deleted successfully");
    } catch (err) {
      errorMessage(err);
    }
  };

  if (skills.length == 0) {
    return (
      <CPEmptyState
        textIcon={"💡"}
        btnText="Add a skill you have"
        action={() => setAddSkills(true)}
      />
    );
  }
  return (
    <>
      <div className="flex gap-3 flex-wrap ">
        {skills.map((skill) => (
          <CPpillet
            key={skill.id}
            name={skill.name}
            action={() => handleDelete(skill.id)}
          />
        ))}
      </div>
    </>
  );
};

// function AddNewSkills({
//   setAddSkills,
// }: {
//   setAddSkills: React.Dispatch<React.SetStateAction<boolean>>;
// }) {
//   const { trigger, isMutating } = useSWRMutation("skill/post", addskills);
//   const {
//     handleSubmit,
//     register,
//     formState: { errors },
//     reset,
//   } = useForm<TSkillsSchema>({
//     resolver: zodResolver(SkillsSchema),
//   });
//   const onClick = async (data: TSkillsSchema) => {
//     try {
//       await trigger(data);
//       successMessage("Skill uploadded succesfully");
//       reset();
//     } catch (err) {
//       errorMessage(err);
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit(onClick)}>
//       <div className="mb-5">
//         <label className="text-[#475569] text-sm mb-2">
//           Skills (maximum 15)
//         </label>
//         <CPInput
//           className="block bg-[#F8FAFC] w-full p-4"
//           placeholder="Add skills"
//           error={errors.skill?.message}
//           {...register("skill")}
//         />
//         <p className="text-xs text-[#64748B]">
//           <span className="text-slate">Suggested:</span> UI/UX Design,
//           Wireframing & Prototyping, Design Systems, Interaction Design, Visual
//           Design
//         </p>
//       </div>

//       <div className="flex justify-end gap-2 mt-12">
//         <button onClick={() => setAddSkills(false)} className="p-3">
//           Back
//         </button>
//         <CPsmallButton type="submit" text="Save" loading={isMutating} />
//       </div>
//     </form>
//   );
// }

function SkillSkeleton() {
  return (
    <div className="flex gap-3 flex-wrap">
      <Skeleton width={80} height={30} style={{ borderRadius: "1000px" }} />
      <Skeleton width={80} height={30} style={{ borderRadius: "1000px" }} />
      <Skeleton width={80} height={30} style={{ borderRadius: "1000px" }} />
      <Skeleton width={80} height={30} style={{ borderRadius: "1000px" }} />
      <Skeleton width={80} height={30} style={{ borderRadius: "1000px" }} />
      <Skeleton width={80} height={30} style={{ borderRadius: "1000px" }} />
      <Skeleton width={80} height={30} style={{ borderRadius: "1000px" }} />
      <Skeleton width={80} height={30} style={{ borderRadius: "1000px" }} />
    </div>
  );
}

function AddNewSkillsTwo({
  setAddSkills,
}: {
  setAddSkills: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { trigger, isMutating } = useSWRMutation("skill/post", addskills);
  const { control, handleSubmit, reset } = useForm<TSkillsSchema>({
    resolver: zodResolver(SkillsSchema),
    defaultValues: { skill: [] },
  });

  const [query, setQuery] = useState("");

  const filtered =
    query === ""
      ? []
      : skillsList
          .filter((s) => s.toLowerCase().includes(query.toLowerCase()))
          .slice(0, 10);

  const onSubmit = async (data: TSkillsSchema) => {
    try {
      await trigger({ skill: data.skill });
      successMessage("Skills uploaded successfully");
      reset();
      setAddSkills(false);
    } catch (err) {
      errorMessage(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="text-[#475569] text-sm mb-2 block">
        Skills (maximum 15)
      </label>

      <Controller
        name="skill"
        control={control}
        render={({ field }) => (
          <div className="mb-5">
            <Combobox
              value={query}
              onChange={(skill: string) => {
                if (
                  skill &&
                  !field.value.includes(skill) &&
                  field.value.length < 15
                ) {
                  field.onChange([...field.value, skill]);
                  setQuery("");
                }
              }}
            >
              <div className="relative">
                <ComboboxInput
                  className="block bg-[#F8FAFC] w-full p-4 rounded"
                  placeholder="Start typing to add a skill…"
                  onChange={(e) => setQuery(e.currentTarget.value)}
                />
                {filtered.length > 0 && (
                  <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded bg-white shadow-lg border">
                    {filtered.map((skill) => (
                      <ComboboxOption key={skill} value={skill} as={Fragment}>
                        {({ active }) => (
                          <li
                            className={`cursor-pointer px-4 py-2 ${
                              active ? "bg-gray-100" : ""
                            }`}
                          >
                            {skill}
                          </li>
                        )}
                      </ComboboxOption>
                    ))}
                  </ComboboxOptions>
                )}
              </div>
            </Combobox>
            {/* Selected tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {field.value.map((s) => (
                <span
                  key={s}
                  className="bg-blue-100 text-primary px-2 py-1 rounded flex items-center"
                >
                  {s}{" "}
                  <button
                    type="button"
                    className="ml-1 font-bold"
                    onClick={() =>
                      field.onChange(field.value.filter((x) => x !== s))
                    }
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
            {field.value.length === 0 && (
              <p className="text-xs text-[#64748B] mt-1">
                <span className="text-slate">Suggested:</span>{" "}
                {skillsList.slice(0, 5).join(", ")}
              </p>
            )}

            {/* Validation error */}
            {field.value.length > 15 && (
              <p className="text-red-500 text-xs mt-1">
                You can select up to 15 skills only.
              </p>
            )}
          </div>
        )}
      />

      <div className="flex justify-end gap-2 mt-6">
        <button
          type="button"
          onClick={() => setAddSkills(false)}
          className="p-3"
        >
          Back
        </button>
        <CPsmallButton type="submit" text="Save" loading={isMutating} />
      </div>
    </form>
  );
}

export default Skills;
