"use client";
import { CPModal } from "@/components";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

import ProfileSettings from "./ProfileSettings";

type ProfileTab =
  | ""
  | "general"
  | "contact"
  | "work_experience"
  | "volunteering"
  | "education"
  | "certification"
  | "skills";

function ProfileModal() {
  const [tab, setTab] = useState<ProfileTab>("");
  const router = useRouter();

  const handleCloseModal = () => {
    router.push("/dashboard");
  };

  return (
    <CPModal
      mobileTitle={tab}
      mobileBackAction={() => setTab("")}
      backgroundAction={handleCloseModal}
      minHeight={500}
    >
      <div className="flex text-slate p-2 h-full">
        <ProfileSettings tab={tab} setTab={setTab} />
      </div>
    </CPModal>
  );
}

export default ProfileModal;
