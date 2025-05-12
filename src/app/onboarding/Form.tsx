"use client";
import CPsmallButton from "@/components/CPsmallButton";
import CPstepSlide from "@/components/CPstepSlide";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { OnboardSchema, TOnboardSchema } from "./type";
import { Dispatch, SetStateAction, useState } from "react";
import CPModal from "@/components/CPModal";
import useSWRMutation from "swr/mutation";
import httprequest from "@/utils/httpRequest";
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

const signupUser = async (url: string, { arg }: { arg: TOnboardSchema }) => {
  const data = {
    full_name: arg.fullName,
    email: arg.email,
    phone: arg.phone,
    job_title: arg.role,
    industry: arg.industry,
    years_of_experience: arg.experience,
    recruiter_tag: arg.recruiter == "true",
    password: arg.password,
    password_confirmation: arg.password,
    visibility: arg.profile,
    bio: arg.profession_journey,
    topics: arg.interests,
  };
  await httprequest.post("/auth/signup", data);
};
const createOptions = (setSuccess: Dispatch<SetStateAction<boolean>>) => ({
  onError: (err: any) => {
    errorMessage(err);
  },
  onSuccess: () => {
    setSuccess(true);
  },
});

function Form() {
  const {
    register,
    trigger,
    formState: { errors },
    watch,
    getValues,
  } = useForm<TOnboardSchema>({
    resolver: zodResolver(OnboardSchema),
  });
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);
  const { trigger: submit, isMutating } = useSWRMutation(
    "api/auth/signup",
    signupUser,
    createOptions(setSuccess)
  );

  // useEffect

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
      valid = true;
    }
    if (step == 10) {
      valid = await trigger(["interests"]);
    }

    if (valid && step == 10) {
      const values = getValues();
      submit(values);
      return;
    }
    if (valid) {
      setStep((s) => s + 1);
    }
  };
  return (
    <section className="bg-white flex-1 rounded-2xl flex justify-center pt-[103]">
      <div className="w-[520]">
        <CPstepSlide />
        {step == 1 && <StepOne register={register} error={errors} />}
        {step == 2 && (
          <StepTwo
            register={register}
            error={errors.profession_journey?.message}
          />
        )}
        {step == 3 && (
          <StepThree register={register} error={errors.password?.message} />
        )}
        {step == 4 && (
          <StepFour register={register} error={errors.role?.message} />
        )}
        {step == 5 && (
          <StepFive
            register={register}
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
            error={errors.profile?.message}
            watch={watch}
          />
        )}
        {step == 9 && <StepNine setStep={setStep} />}
        {step == 10 && (
          <StepTen
            register={register}
            error={errors.interests?.message}
            watch={watch}
          />
        )}
        <div className="flex justify-end gap-2 mt-12">
          <button
            className="p-3"
            onClick={() => {
              if (step > 1) {
                setStep((s) => s - 1);
              }
            }}
          >
            Back
          </button>
          <CPsmallButton
            text="Next"
            onClick={handleNext}
            loading={isMutating}
          />
        </div>
      </div>
      {success && <SuccessModal />}
    </section>
  );
}

const SuccessModal = () => {
  return (
    <CPModal width={445}>
      <div className="p-[18]">
        <h3 className="mb-4 text-lg font-medium text-[#050505]">
          You&apos;re all set! Here’s what’s next ✨
        </h3>
        <p className="mb-6 text-[#64748B]">
          You can complete your profile later to unlock more opportunities.
        </p>
        <div className="flex justify-end gap-2 mt-12">
          {/* <button className="p-3">Back</button> */}
          <CPsmallButton text="Preview profile" />
        </div>
      </div>
    </CPModal>
  );
};

export default Form;
