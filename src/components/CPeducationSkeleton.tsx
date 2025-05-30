import React from "react";
import Skeleton from "react-loading-skeleton";

function CPeducationSkeleton() {
  return (
    <div className="flex gap-20 mb-4">
      <Skeleton width={80} height={20} />
      <div>
        <Skeleton width={350} height={120} className="mb-3.5" />
        <Skeleton width={350} height={120} />
      </div>
    </div>
  );
}

export default CPeducationSkeleton;
