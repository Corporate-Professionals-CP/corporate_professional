"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import {
  BackIcon,
  BookmarkIcon,
  CloseIcon,
  EditIcon,
  HamburgerIcon,
  HomeIcon,
  NotificationIcon,
  SearchIcon,
  WifiIcon,
} from "@/imagecomponents";
import { CPprofileImg } from "@/components";
import { usePathname } from "next/navigation";
import Link from "next/link";
import AccountSetup from "./AccountSetup";
import ProfileIcon from "@/imagecomponents/ProfileIcon";

function MIddleSectionContainer({ ...props }: { children: ReactNode }) {
  return (
    <section className="w-[600] border border-[#E2E8F0]  shrink-0 max-lg:shrink  max-sm:w-full max-sm:p-5">
      <MobileSidebar />
      {props.children}
    </section>
  );
}

function MobileSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      {open && (
        <div
          ref={dropdownRef}
          className="h-screen fixed w-3/4 bg-white left-0 top-0 z-40 p-5  flex-col items-stretch sidenavshadow hidden max-sm:flex"
        >
          <div className="careershadow p-4 mb-3">
            <p className="text-sm text-[#050505] mb-2 ">Account setup</p>
            <p className="text-[#64748B] text-xs mb-6">
              To completely setup your account, click the button below:
            </p>
            <p className="text-xs font-medium text-primary">Get Started</p>
          </div>
          <button className="w-full text-center text-xs text-[#020617] p-3 rounded-full border border-[#E2E8F0] font-medium">
            Contact support
          </button>
          <div className="mt-auto mb-7 px-3">
            <button onClick={() => setAccountOpen(true)}>
              <CPprofileImg size={32} />
            </button>
            <ul className="flex flex-col gap-6 mt-8">
              <li>
                <Link
                  className="flex gap-[10px] items-center"
                  href="/dashboard"
                >
                  <HomeIcon size={"24"} active={pathname == "/dashboard"} />
                  <span className="text-sm text-[#020617]">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex gap-[10px] items-center"
                  href={"/dashboard/search"}
                >
                  <SearchIcon
                    size={"24"}
                    color={
                      pathname == "/dashboard/search" ? "#7074ff" : "#020617"
                    }
                  />
                  <span className="text-sm text-[#020617]">Search</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/dashboard/profile"}
                  className="flex gap-[10px] items-center"
                >
                  <ProfileIcon
                    color={
                      pathname == "/dashboard/profile" ? "#7074ff" : "#020617"
                    }
                  />
                  <span className="text-sm text-[#020617]">Profile</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/dashboard/network"}
                  className="flex gap-[10px] items-center"
                >
                  <WifiIcon
                    size={"24"}
                    color={
                      pathname == "/dashboard/network" ? "#7074ff" : "#020617"
                    }
                  />
                  <span className="text-sm text-[#020617]">My Network</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/dashboard/bookmark"}
                  className="flex gap-[10px] items-center"
                >
                  <BookmarkIcon
                    size={"24"}
                    color={
                      pathname == "/dashboard/bookmark" ? "#7074ff" : "#020617"
                    }
                  />
                  <span className="text-sm text-[#020617]">Bookmarks</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/dashboard/notification"}
                  className="flex gap-[10px] items-center"
                >
                  <NotificationIcon
                    size={"24"}
                    active={pathname == "/dashboard/notification"}
                  />
                  <span className="text-sm text-[#020617]">Notifications</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-3 mb-10">
            <button
              className="w-12 h-12 rounded-full grid place-content-center bg-white careershadow "
              onClick={() => setOpen(false)}
            >
              <CloseIcon size="24" />
            </button>
            <Link
              href={"/dashboard/profile"}
              className="w-12 h-12 rounded-full grid place-content-center bg-white careershadow "
            >
              <EditIcon />
            </Link>
          </div>
        </div>
      )}
      <button
        className="w-12 h-12 rounded-full  place-content-center bg-white careershadow fixed bottom-12 left-12 hidden z-10 max-sm:grid"
        onClick={() => setOpen(true)}
      >
        <HamburgerIcon />
      </button>
      {accountOpen && (
        <section className="fixed left-0 top-0 w-full h-screen z-50 bg-white p-5 overflow-y-scroll">
          <button className="py-3" onClick={() => setAccountOpen(false)}>
            <BackIcon />
          </button>
          <AccountSetup />
        </section>
      )}
    </>
  );
}

export default MIddleSectionContainer;
