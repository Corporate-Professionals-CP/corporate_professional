import React from "react";
import Skeleton from "react-loading-skeleton";

const CPpostCardSkeleton = () => {
  return (
    <div className="p-6 flex items-start gap-4 max-sm:flex-col max-sm:items-stretch">
      <Skeleton circle width={48} height={48} />
      <div className="flex-1">
        <Skeleton height={40} className="mb-4" />
        <Skeleton height={60} className="mb-6" />
        <div className="flex items-center justify-between">
          <Skeleton height={20} width={173} />
          <Skeleton height={20} width={58} />
        </div>
      </div>
    </div>
  );
};
export default CPpostCardSkeleton;
