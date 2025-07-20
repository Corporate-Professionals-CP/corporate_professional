"use client";
import CPSwitchbox from "@/components/CPSwitchbox";
import CPInput from "@/components/CPInput";
import CPprofileImg from "@/components/CPprofileImg";
import CPselect from "@/components/CPselect";
import CPsmallButton from "@/components/CPsmallButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ProfileSchema, TProfileSchema } from "./type";
import CPformError from "@/components/CPformError";
import useUser from "@/statestore/useUser";
import useSWRMutation from "swr/mutation";
import { updateProfile, updateProfilePicture } from "./functions";
import { errorMessage, successMessage } from "@/utils/toastalert";
import { useEffect, useRef, useState } from "react";
import { EditIcon } from "@/imagecomponents";
import { convertImage } from "@/utils/convertHEICtoJPEG";

const General = () => {
  const { user } = useUser((state) => state);
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<TProfileSchema>({
    resolver: zodResolver(ProfileSchema),
  });

  useEffect(() => {
    if (user) {
      reset({
        full_name: user.full_name || "",
        job_title: user.job_title || "",
        industry: user.industry || "",
        // linkedin: user.linkedin_profile
        location: user.location || "",
        pronouns: user.sex || "",
        recruiter_tag: user.recruiter_tag ? "yes" : "no",
        visibility: user.visibility || "",
        experience: user.years_of_experience || "",
        bio: user.bio || "",
      });
    }
  }, [user, reset]);

  const { trigger, isMutating } = useSWRMutation(
    `profiles/${user?.id}`,
    updateProfile
  );
  const onClick = async (data: TProfileSchema) => {
    try {
      await trigger(data);

      successMessage("Profile updated succesful");
    } catch (err) {
      errorMessage(err);
    }
  };
  return (
    <div>
      <UpdateImage />
      <form onSubmit={handleSubmit(onClick)}>
        <div className="mb-5">
          <label className="mb-2 text-sm text-[#475569]">Name</label>
          <CPInput
            placeholder="Fullname"
            {...register("full_name")}
            error={errors.full_name?.message}
          />
        </div>
        <div className="mb-5">
          <label className="mb-2 text-sm text-[#475569]">What do you do?</label>
          <CPInput
            placeholder="Product Design"
            {...register("job_title")}
            error={errors.job_title?.message}
          />
        </div>
        <div className="mb-5">
          <label className="mb-2 text-sm text-[#475569]">
            Which industry best describes your work?
          </label>
          <CPselect
            items={[
              { text: "Technology", val: "Technology" },
              { text: "Finance", val: "Finance" },
              { text: "Healthcare", val: "Healthcare" },
              { text: "Education", val: "Education" },
              { text: "Manufacturing", val: "Manufacturing" },
              { text: "Consulting", val: "Consulting" },
              { text: "Government", val: "Government" },
              { text: "Nonprofit", val: "Nonprofit" },
              { text: "Other", val: "Other" },
            ]}
            onChange={(val: string) => setValue("industry", val)}
            value={watch("industry")}
            error={errors.industry?.message}
          />
        </div>
        <div className="mb-5">
          <label className="mb-2 text-sm text-[#475569]">Linkedin URL</label>
          <CPInput
            placeholder="https://www.example.com"
            {...register("linkedin")}
            error={errors.linkedin?.message}
          />
        </div>
        <div className="mb-5">
          <label className="mb-2 text-sm text-[#475569]">Location</label>
          <CPInput
            placeholder="Where are you based?"
            {...register("location")}
            error={errors.location?.message}
          />
        </div>
        <div className="mb-5">
          <label className="mb-2 text-sm text-[#475569]">Pronouns</label>
          <CPselect
            items={[
              { text: "Male", val: "Male" },
              { text: "Female", val: "Female" },
              { text: "Non-binary", val: "Non-binary" },
              { text: "Prefer not to say", val: "Prefer not to say" },
              { text: "Other", val: "Other" },
            ]}
            onChange={(val: string) => setValue("pronouns", val)}
            value={watch("pronouns")}
            placeholder="They/them, etc"
            error={errors.pronouns?.message}
          />
        </div>
        <div className="mb-5">
          <label className="mb-2 text-sm text-[#475569]">
            Are you a recruiter?
          </label>
          <div className="flex gap-2">
            <CPSwitchbox
              text="Yes"
              {...register("recruiter_tag")}
              watchvalue={watch("recruiter_tag")}
              value="yes"
            />
            <CPSwitchbox
              text="No"
              {...register("recruiter_tag")}
              watchvalue={watch("recruiter_tag")}
              value="no"
            />
          </div>
          <CPformError error={errors.recruiter_tag?.message} />
        </div>
        <div className="mb-5">
          <label className="mb-2 text-sm text-[#475569]">
            Profile preferences
          </label>
          <div className="flex gap-2">
            <CPSwitchbox
              text="Public"
              {...register("visibility")}
              watchvalue={watch("visibility")}
              value="Public"
            />
            <CPSwitchbox
              text="Private"
              {...register("visibility")}
              watchvalue={watch("visibility")}
              value="Private"
            />
          </div>
          <CPformError error={errors.visibility?.message} />
        </div>
        <div className="mb-5">
          <label className="mb-2 text-sm text-[#475569]">
            How experienced are you?
          </label>
          <CPselect
            items={[
              { text: "⏳ 0-2", val: "0-2 years" },
              { text: "🏆 3-5", val: "3-5 years" },
              { text: "🚀 6-10", val: "6-10 years" },
              { text: "👑 10+ ", val: "10+ years" },
            ]}
            onChange={(val: string) => setValue("experience", val)}
            value={watch("experience")}
            error={errors.experience?.message}
          />
        </div>
        <div className="mb-5">
          <label className="mb-2 text-sm text-[#475569]">About</label>
          <CPInput
            type="textarea"
            className="h-[169]"
            {...register("bio")}
            error={errors.bio?.message}
          />
        </div>
        <div className="flex justify-end gap-2 mt-12">
          <button className="p-3">Back</button>
          <CPsmallButton text="Done" type="submit" loading={isMutating} />
        </div>
      </form>
    </div>
  );
};

function UpdateImage() {
  const { user, setUser } = useUser((state) => state);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | undefined>("");

  useEffect(() => {
    setPreviewUrl(user?.profile_image_url);
  }, [user]);

  const { trigger, isMutating } = useSWRMutation(
    `/profiles/${user?.id}/profile-image`,
    updateProfilePicture
  );

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    if (
      selectedFile.type === "image/heic" ||
      selectedFile.name.endsWith(".heic")
    ) {
      const jpegFile = await convertImage(selectedFile);
      if (!jpegFile) return;
      setFile(jpegFile);
      setPreviewUrl(URL.createObjectURL(jpegFile));
    } else {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  console.log(previewUrl, "PREVIEW STATE");
  const handleUpload = async () => {
    if (!file) return;

    try {
      const response = await trigger({ file: file });
      setUser(response);
      successMessage("Profile picture updated");
    } catch (err) {
      console.error(err);
      errorMessage(err, "Unable to update profile picture");
    }
  };

  return (
    <div className="flex items-center gap-4 mb-8">
      <label className="relative">
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />

        <CPprofileImg
          size={63}
          url={previewUrl || null}
          full_name={user?.full_name}
        />
        <div className="absolute -bottom-0.5 -right-1.5">
          <EditIcon />
        </div>
      </label>
      <button
        onClick={handleUpload}
        className="font-medium text-sm bg-[#F8FAFC] px-3 py-2 rounded-lg hover:bg-[#E2E8F0]"
        disabled={isMutating || !file}
      >
        {isMutating ? "Uploading..." : "Update Image"}
      </button>
    </div>
  );
}
export default General;
