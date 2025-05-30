import React from "react";
import Skeleton from "react-loading-skeleton";

const CPprofileCardSkeleton = () => {
  return (
    <div className="flex gap-5 items-center  p-3.5">
      <Skeleton circle width={48} height={48} />
      <div className="flex-1">
        <Skeleton width={176} height={20} className="mb-1" />
        <Skeleton width={300} height={20} />
      </div>
      <Skeleton height={34} width={64} className="rounded-[5px]" />
    </div>
  );
};

export default CPprofileCardSkeleton;
