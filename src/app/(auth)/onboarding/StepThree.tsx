import CPText from "@/components/CPText";
import React from "react";
import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { TOnboardSchema } from "./type";
import CPInput from "@/components/CPInput";

const getPasswordStrength = (password: string) => {
  if (!password) return "weak";
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);
  const isLongEnough = password?.length >= 6;

  const passedChecks = [
    hasUpperCase,
    hasNumber,
    hasSymbol,
    isLongEnough,
  ].filter(Boolean).length;

  if (passedChecks === 0) return "Very Weak";
  if (passedChecks <= 2) return "Weak";
  if (passedChecks === 3) return "Okay";
  if (passedChecks === 4) return "Good";

  return "Weak";
};

const StepThree = ({
  register,
  error = "",
  watch,
}: {
  register: UseFormRegister<TOnboardSchema>;
  error?: string;
  watch: UseFormWatch<TOnboardSchema>;
}) => {
  const password = watch("password");
  const passwordStrength = getPasswordStrength(password);
  return (
    <>
      <CPText
        majorheading="Set a password to keep your account secure."
        minorheading="Basic Information"
      />
      <div className="flex justify-between mb-[8]">
        <p className="text-sm">Create Password</p>
        <div>
          <p
            className={`text-xs text-slatea ${
              passwordStrength === "Good"
                ? "text-green-600"
                : passwordStrength === "Okay"
                ? "text-yellow-600"
                : "text-red-500"
            }`}
          >
            {password ? passwordStrength : ""}
          </p>
          {/* <div className="width"></div> */}
        </div>
      </div>
      <CPInput
        placeholder="Your password"
        type="password"
        {...register("password")}
        error={error}
      />
    </>
  );
};

export default StepThree;
