"use client";
import CPsmallButton from "@/components/CPsmallButton";
import CPstepSlide from "@/components/CPstepSlide";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { OnboardSchema, TOnboardSchema } from "./type";
import { useState } from "react";
import useSWRMutation from "swr/mutation";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";
import StepSeven from "./StepSeven";
import StepEight from "./StepEight";
import StepNine from "./StepNine";
import StepTen from "./StepTen";
import { errorMessage } from "@/utils/toastalert";
import { signupUser } from "./functions";
import VerifyEmailModal from "../VerifyEmailModal";
import { CPsideOnboard } from "@/components";
import StepSkill from "./StepSkill";

function Form() {
  const {
    register,
    trigger,
    formState: { errors },
    watch,
    getValues,
    setValue,
    control,
  } = useForm<TOnboardSchema>({
    resolver: zodResolver(OnboardSchema),
  });
  const [step, setStep] = useState(1);

  const [emailmodal, setEmailModal] = useState(false);
  const [token, setToken] = useState("");
  const { trigger: submit, isMutating } = useSWRMutation(
    "/auth/signup",
    signupUser
  );

  const handleNext = async () => {
    let valid = false;
    if (step == 1) {
      valid = await trigger(["fullName", "email", "phone"]);
    }
    if (step == 2) {
      valid = await trigger(["profession_journey"]);
    }
    if (step == 3) {
      valid = await trigger(["password"]);
    }
    if (step == 4) {
      valid = await trigger(["role"]);
    }
    if (step == 5) {
      valid = await trigger(["industry"]);
    }
    if (step == 6) {
      valid = await trigger(["experience"]);
    }
    if (step == 7) {
      valid = await trigger(["profile"]);
    }
    if (step == 8) {
      valid = await trigger(["recruiter"]);
    }
    if (step == 9) {
      valid = await trigger(["skills"]);
    }
    if (step == 10) {
      valid = true;
    }
    if (step == 11) {
      valid = await trigger(["interests"]);
    }

    if (valid && step == 11) {
      const values = getValues();
      try {
        const response = await submit(values);
        setToken(response.access_token);
        setEmailModal(true);
      } catch (err) {
        errorMessage(err);
      }
      return;
    }
    if (valid) {
      setStep((s) => s + 1);
    }
  };
  return (
    <>
      <CPsideOnboard step={step} />

      <section className="bg-white flex-1 rounded-2xl flex justify-center pt-[103] px-6 pb-6 overflow-y-scroll">
        <div className="max-w-[520] w-full">
          <CPstepSlide currentstep={step} />
          {step == 1 && <StepOne register={register} error={errors} />}
          {step == 2 && (
            <StepTwo
              register={register}
              error={errors.profession_journey?.message}
            />
          )}
          {step == 3 && (
            <StepThree
              register={register}
              error={errors.password?.message}
              watch={watch}
            />
          )}
          {step == 4 && (
            <StepFour register={register} error={errors.role?.message} />
          )}
          {step == 5 && (
            <StepFive
              // register={register}
              setValue={setValue}
              error={errors.industry?.message}
              watch={watch}
            />
          )}
          {step == 6 && (
            <StepSix
              register={register}
              error={errors.experience?.message}
              watch={watch}
            />
          )}
          {step == 7 && (
            <StepSeven
              register={register}
              error={errors.profile?.message}
              watch={watch}
            />
          )}
          {step == 8 && (
            <StepEight
              register={register}
              error={errors.recruiter?.message}
              watch={watch}
            />
          )}
          {step == 9 && (
            <StepSkill control={control} error={errors.skills?.message} />
          )}
          {step == 10 && (
            <StepNine
              setStep={setStep}
              onChange={(file: File) => setValue("cvfile", file)}
            />
          )}
          {step == 11 && (
            <StepTen
              register={register}
              error={errors.interests?.message}
              watch={watch}
            />
          )}
          <div className="flex justify-end gap-2 mt-12">
            <button
              className="p-3 cursor-pointer"
              onClick={() => {
                if (step > 1) {
                  setStep((s) => s - 1);
                }
              }}
            >
              Back
            </button>
            <CPsmallButton
              text={step == 11 ? "Finish" : "Next"}
              onClick={handleNext}
              loading={isMutating}
            />
          </div>
        </div>
        {emailmodal && (
          <VerifyEmailModal email={watch("email")} token={token} />
        )}
      </section>
    </>
  );
}

export default Form;
