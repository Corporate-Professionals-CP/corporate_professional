import React, { Dispatch, SetStateAction } from "react";
import CPModal from "./CPModal";
import useSWRMutation from "swr/mutation";
import { reportPost } from "@/app/functions";
import CPInput from "./CPInput";
import { useForm } from "react-hook-form";
import { ReportSchema, TReportSchema } from "@/app/type";
import CPselect from "./CPselect";
import CPbutton from "./CPbutton";
import { errorMessage, successMessage } from "@/utils/toastalert";
import { zodResolver } from "@hookform/resolvers/zod";

function CPreportPost({
  setCreatemodal,
  content_type,
  reported_user_id,
  content_id,
}: {
  setCreatemodal: Dispatch<SetStateAction<boolean>>;
  content_id: string;
  reported_user_id: string;
  content_type:
    | "user_profile"
    | "post"
    | "comment"
    | "message"
    | "connection_request";
}) {
  const handleCloseModal = () => setCreatemodal(false);
  const { trigger: submit, isMutating } = useSWRMutation(
    "/reports/",
    reportPost
  );
  const {
    register,
    watch,
    formState: { errors },
    setValue,
    getValues,
    trigger,
  } = useForm<TReportSchema>({
    resolver: zodResolver(ReportSchema),
  });

  const onsubmit = async () => {
    const valid = await trigger(["title", "description", "report_type"]);
    console.log(valid, "VALID YEAH");
    if (!valid) return;
    const data = getValues();
    try {
      await submit({ ...data, content_type, reported_user_id, content_id });
      successMessage("Report successful");
      handleCloseModal();
    } catch (err) {
      errorMessage(err);
    }
  };
  return (
    <CPModal backgroundAction={handleCloseModal} width={600}>
      <div className="p-6">
        <h3 className="mb-4 font-semibold">Report</h3>
        <div className="mb-4">
          <label>Report title</label>
          <CPInput
            {...register("title")}
            placeholder="Report title"
            error={errors.title?.message}
          />
        </div>
        <div className="mb-4">
          <label>Report description</label>
          <CPInput
            type="textarea"
            {...register("description")}
            placeholder="Report title"
            error={errors.description?.message}
          />
        </div>
        <div className="mb-4">
          <label>Report type</label>
          <CPselect
            items={[
              { text: "harassment", val: "harassment" },
              { text: "spam", val: "spam" },
              { text: "inappropriate_content", val: "inappropriate_content" },
              { text: "fake_profile", val: "fake_profile" },
              { text: "hate_speech", val: "hate_speech" },
              { text: "misinformation", val: "misinformation" },
              { text: "intellectual_property", val: "intellectual_property" },
              { text: "privacy_violation", val: "privacy_violation" },
              { text: "violence_threats", val: "violence_threats" },
              { text: "adult_content", val: "adult_content" },
              { text: "discrimination", val: "discrimination" },
              { text: "bullying", val: "bullying" },
              { text: "impersonation", val: "impersonation" },
              { text: "scam", val: "scam" },
              { text: "Other", val: "Other" },
            ]}
            onChange={(val: string) => setValue("report_type", val)}
            value={watch("report_type")}
            error={errors.report_type?.message}
          />
        </div>
        <CPbutton onClick={onsubmit} loading={isMutating}>
          Submit
        </CPbutton>
      </div>
    </CPModal>
  );
}

export default CPreportPost;
