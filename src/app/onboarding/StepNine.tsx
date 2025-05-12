import CPText from "@/components/CPText";
import UploadIcon from "@/imagecomponents/UploadIcon";
import httprequest from "@/utils/httpRequest";
import React, { Dispatch, SetStateAction, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import useSWRMutation from "swr/mutation";

const uploadFile = async (url: string, { arg }: { arg: File }) => {
  await httprequest.post("/api/profiles/user_id/cv", {
    file: arg,
  });
};

const options = {
  onError: () => {},
  onSuccess: () => {},
};

const StepNine = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  const { trigger } = useSWRMutation(
    "/api/profiles/user_id/cv",
    uploadFile,
    options
  );
  const handleFile = (file: File) => {
    return;
    trigger(file);
  };
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    console.log(acceptedFiles, "drag");
    handleFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <CPText
        majorheading="Want to upload your CV now or later?"
        minorheading="Profile Preferences"
      />

      <label
        className="
        border-primary outline-2 outline-[#7074FF40] outline-offset-1  border  flex justify-between  mb-2 py-[14px] px-[16px] w-full bg-[#F8FAFC] rounded-[8px] text-sm text-[#020617]"
      >
        <input
          type="file"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFile(file);
          }}
        />
        <p>Upload now</p>
      </label>
      <div
        className={`${
          isDragActive ? "bg-[#7074FF40]" : "bg-[#F8FAFC]"
        } p-4 flex flex-col items-start mb-4`}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <UploadIcon />
        <p className="text-[#020617] text-sm mb-2 mt-4">
          Drop your file here to upload
        </p>
        <p className="text-[#020617] text-sm mb-6">
          File types: .docx, .doc, .pdf, .txt, .odt or .rtf.{" "}
        </p>
        <div className="self-end">
          <p>Choose your CV file</p>
        </div>
      </div>
      <button
        className="bg-[#F8FAFC] text-[#334155] text-sm   py-[14px] px-[16px] rounded-[8px]"
        onClick={() => setStep((s) => s + 1)}
      >
        Skip for now
      </button>
    </>
  );
};

export default StepNine;
