// StepSkill.tsx
"use client";

import React, { Fragment, useMemo, useState } from "react";
import { Control, Controller } from "react-hook-form";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { CPText } from "@/components";
import { skillsList } from "@/utils";
import { TOnboardSchema } from "./type";

type Props = {
  control: Control<TOnboardSchema>;
  error?: string;
};

export default function StepSkill({ control, error = "" }: Props) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return skillsList.filter((s) => s.toLowerCase().includes(q)).slice(0, 10);
  }, [query]);

  return (
    <>
      <CPText majorheading="What skills do you have" minorheading="Skills" />

      <Controller
        name="skills"
        control={control}
        // Safety: if your useForm has defaultValues this isn't needed, but it doesn't hurt:
        defaultValue={[]}
        render={({ field }) => {
          const value: string[] = Array.isArray(field.value) ? field.value : [];

          const addSkill = (skill: string) => {
            if (!skill) return;
            // de-dupe case-insensitively
            const exists = value.some(
              (v) => v.toLowerCase() === skill.toLowerCase()
            );
            if (exists) return;
            if (value.length >= 15) return;
            field.onChange([...value, skill]);
            setQuery("");
          };

          const removeSkill = (skill: string) => {
            field.onChange(value.filter((x) => x !== skill));
          };

          return (
            <div className="mb-5">
              <Combobox value={query} onChange={addSkill} nullable>
                <div className="relative">
                  <ComboboxInput
                    className="block bg-[#F8FAFC] w-full p-4 rounded outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#7074ff]"
                    placeholder="Start typing to add a skill…"
                    onChange={(e) => setQuery(e.currentTarget.value)}
                    // Optional: let Enter add the first suggestion
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && filtered.length > 0) {
                        e.preventDefault();
                        addSkill(filtered[0]);
                      }
                    }}
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
              <div className="flex flex-wrap gap-2 mt-3">
                {value.map((s) => (
                  <span
                    key={s}
                    className="bg-indigo-50 text-[#7074ff] border border-[#7074ff]/20 px-2 py-1 rounded-full text-sm flex items-center"
                  >
                    {s}
                    <button
                      type="button"
                      className="ml-2 -mr-1 rounded-full w-5 h-5 flex items-center justify-center hover:bg-[#7074ff]/10"
                      onClick={() => removeSkill(s)}
                      aria-label={`Remove ${s}`}
                      title={`Remove ${s}`}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>

              {/* Suggestions hint */}
              {value.length === 0 && (
                <p className="text-xs text-[#64748B] mt-2">
                  <span className="text-slate-600">Suggested:</span>{" "}
                  {skillsList.slice(0, 5).join(", ")}
                </p>
              )}

              {/* Validation / limits */}
              {value.length >= 15 && (
                <p className="text-red-500 text-xs mt-1">
                  You can select up to 15 skills only.
                </p>
              )}
            </div>
          );
        }}
      />

      {error && (
        <p className="text-[#E62E2E] text-sm -translate-1.5 mb-0">{error}</p>
      )}
    </>
  );
}
