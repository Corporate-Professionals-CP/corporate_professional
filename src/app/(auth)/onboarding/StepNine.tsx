import CPText from "@/components/CPText";
import { DocIcon } from "@/imagecomponents";
import UploadIcon from "@/imagecomponents/UploadIcon";
import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

// const uploadFile = async (url: string, { arg }: { arg: File }) => {
//   await httprequest.post("/api/profiles/user_id/cv", {
//     file: arg,
//   });
// };

// const options = {
//   onError: () => {},
//   onSuccess: () => {},
// };

// const { trigger } = useSWRMutation(
//   "/api/profiles/user_id/cv",
//   uploadFile,
//   options
// );

const StepNine = ({
  setStep,
  onChange,
}: {
  setStep: Dispatch<SetStateAction<number>>;
  onChange: (file: File) => void;
}) => {
  const [localstate, setLocalstate] = useState<File | null>(null);
  const handleFile = (file: File) => {
    onChange(file);
    setLocalstate(file);
    // [[store in state instead]]
  };
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files

    handleFile(acceptedFiles[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        border-primary outline-2 outline-[#7074FF40] outline-offset-1  border  flex justify-between  mb-2 py-[14px] px-[16px] w-full bg-[#F8FAFC] rounded-[8px] text-sm text-slate"
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
      {/* <div
        className={`${
          isDragActive ? "bg-[#7074FF40]" : "bg-[#F8FAFC]"
        } p-4 flex flex-col items-start mb-4`}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <UploadIcon />
        <p className="text-slate text-sm mb-2 mt-4">
          Drop your file here to upload
        </p>
        <p className="text-slate text-sm mb-6">
          File types: .docx, .doc, .pdf, .txt, .odt or .rtf.{" "}
        </p>
        <div className="self-end">
          <p>Choose your CV file</p>
        </div>
      </div> */}
      <div
        className={`${
          isDragActive ? "bg-[#7074FF40]" : "bg-[#F8FAFC]"
        } p-4 flex flex-col items-start mb-4`}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {localstate ? (
          <div className="w-full ">
            <p className="text-[#020617] text-sm mb-2">Selected CV:</p>
            <p className="text-sm text-[#334155] truncate flex gap-2 items-center">
              <DocIcon />
              {localstate.name}
            </p>
            <p className=" text-right w-full mt-7 text-primary font-medium text-sm">
              Update Cv
            </p>
          </div>
        ) : (
          <>
            <UploadIcon />
            <p className="text-slate text-sm mb-2 mt-4">
              Drop your file here to upload
            </p>
            <p className="text-slate text-sm mb-6">
              File types: .docx, .doc, .pdf, .txt, .odt or .rtf.
            </p>

            <div className="self-end">
              <p className="text-slate text-sm">Choose your CV file</p>
            </div>
          </>
        )}
      </div>

      <button
        className="bg-[#F8FAFC] text-[#334155] text-sm   py-[14px] px-[16px] rounded-[8px] w-full text-left"
        onClick={() => setStep((s) => s + 1)}
      >
        Skip for now
      </button>
    </>
  );
};

export default StepNine;
