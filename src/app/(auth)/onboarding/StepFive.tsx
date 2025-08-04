import React from "react";
import { UseFormSetValue, UseFormWatch } from "react-hook-form";
import { TOnboardSchema } from "./type";
import CPText from "@/components/CPText";
import { industriesList } from "@/utils";
import { CPselect } from "@/components";

const StepFive = ({
  // register,
  error = "",
  watch,
  setValue,
}: {
  // register: UseFormRegister<TOnboardSchema>;
  error?: string;
  watch: UseFormWatch<TOnboardSchema>;
  setValue: UseFormSetValue<TOnboardSchema>;
}) => {
  const selected = watch("industry");
  return (
    <>
      <CPText
        majorheading="Which industry best describes your work?"
        minorheading="Professional Details"
      />
      <CPselect
        items={industriesList.map((ind) => {
          return { text: ind, val: ind };
        })}
        onChange={(val: string) => setValue("industry", val)}
        value={selected}
        placeholder="Accounting"
        error={error}
      />
    </>
  );
};

export default StepFive;
