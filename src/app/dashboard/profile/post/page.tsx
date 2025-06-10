"use client";
import useUser from "@/statestore/useUser";
import React from "react";
import useSWR from "swr";
import { fetchUsersPosts } from "../functions";
import CPpostCardSkeleton from "@/components/CPpostCardSkeleton";
import { CPEmptyState, CPModal, CPpostCard } from "@/components";
import { useRouter } from "next/navigation";
import SideNav from "../SideNav";

function Page() {
  const user = useUser((state) => state.user);
  const { data = [], isLoading } = useSWR(
    user?.id ? `/posts/user/${user.id}` : null,
    fetchUsersPosts
  );
  const router = useRouter();

  const handleCloseModal = () => {
    router.push("/dashboard");
  };
  return (
    <CPModal
      mobileTitle={"Post"}
      mobileBackAction={handleCloseModal}
      backgroundAction={handleCloseModal}
      minHeight={500}
    >
      <div className="flex text-slate p-2 h-full">
        <SideNav className="max-sm:hidden" />
        <div className="flex-1 p-4.5">
          <h3 className="mb-5 text-lg font-medium px-4.5">Posts</h3>
          {isLoading ? (
            <>
              <CPpostCardSkeleton />
              <CPpostCardSkeleton />
            </>
          ) : data.length == 0 ? (
            <CPEmptyState textIcon="📑" btnText="No Post" />
          ) : (
            data.map((post) => <CPpostCard post={post} key={post.id} />)
          )}
        </div>
      </div>
    </CPModal>
  );
}

export default Page;
