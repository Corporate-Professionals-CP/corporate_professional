import CPSwitchbox from "@/components/CPSwitchbox";
import CPInput from "@/components/CPInput";
import CPprofileImg from "@/components/CPprofileImg";
import CPselect from "@/components/CPselect";
import CPsmallButton from "@/components/CPsmallButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ProfileSchema, TProfileSchema } from "./type";
import CPformError from "@/components/CPformError";

const General = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useForm<TProfileSchema>({
    resolver: zodResolver(ProfileSchema),
  });
  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <CPprofileImg size={63} />
        <p className="font-medium text-sm bg-[#F8FAFC] px-3 py-2 rounded-lg ">
          Update image
        </p>
      </div>
      <form>
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
            {...register("industry")}
            error={errors.industry?.message}
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
          <CPInput
            placeholder="They/them, etc"
            {...register("pronouns")}
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
            Who should see your profile?
          </label>
          <div className="flex gap-2">
            <CPSwitchbox
              text="Public"
              {...register("visibility")}
              watchvalue={watch("visibility")}
              value="public"
            />
            <CPSwitchbox
              text="Private"
              {...register("visibility")}
              watchvalue={watch("visibility")}
              value="private"
            />
          </div>
          <CPformError error={errors.visibility?.message} />
        </div>
        <div className="mb-5">
          <label className="mb-2 text-sm text-[#475569]">
            How experienced are you?
          </label>
          <CPselect
            {...register("experience")}
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
          <CPsmallButton text="Done" />
        </div>
      </form>
    </div>
  );
};

export default General;
