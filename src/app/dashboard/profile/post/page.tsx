"use client";
import useUser from "@/statestore/useUser";
import React from "react";
import useSWR from "swr";
import { fetchUsersPosts } from "../functions";
import CPpostCardSkeleton from "@/components/CPpostCardSkeleton";
import { CPEmptyState, CPpostCard } from "@/components";

function Page() {
  const user = useUser((state) => state.user);
  const { data = [], isLoading } = useSWR(
    user?.id ? `/posts/user/${user.id}` : null,
    fetchUsersPosts
  );
  return (
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
  );
}

export default Page;
