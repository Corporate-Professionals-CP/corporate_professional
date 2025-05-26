"use client";
import useUser from "@/statestore/useUser";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const getInitial = (full_name: string | undefined | null) => {
  if (!full_name) {
    return "";
  }
  const names = full_name.split(" ");
  if (names.length == 1) {
    return `${names[0].slice(0, 2)}`;
  }
  return `${names[0][0]}.${names[1][0]}`;
};

function CPprofileImg({
  size = 48,
  url = undefined,
  full_name = "",
}: {
  size?: number;
  url?: null | undefined | string;
  full_name?: string;
}) {
  const [validSrc, setValidSrc] = useState("");
  const [initials, setInitials] = useState("");
  const [hasError, setHasError] = useState(false);
  const user = useUser((state) => state.user);
  useEffect(() => {
    // Normalize path

    let tempurl = url;
    if (full_name) {
      setInitials(getInitial(full_name));
    } else {
      setInitials(getInitial(user?.full_name));
    }

    if (!tempurl) {
      tempurl = user?.profile_image_url;
    }

    if (tempurl && (tempurl.startsWith("http") || tempurl.startsWith("/"))) {
      setValidSrc(tempurl);
    } else {
      setHasError(true);
    }
  }, [url, full_name, user]);

  return (
    <div
      className=" rounded-full bg-amber-100 grid place-content-center"
      style={{ height: size, width: size }}
    >
      {!hasError && validSrc !== "" ? (
        <Image
          src={validSrc}
          alt="profile"
          className="w-full h-full object-cover"
          width={size}
          height={size}
          onError={() => setHasError(true)}
        />
      ) : (
        initials
      )}
    </div>
  );
}

export default CPprofileImg;
