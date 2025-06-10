import React from "react";
import Skeleton from "react-loading-skeleton";

function CPeducationSkeleton() {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-20 gap-4 mb-4 w-full">
      <div className="sm:w-[80px] w-1/4">
        <Skeleton height={20} className="w-full" />
      </div>
      <div className="flex flex-col gap-4 flex-1">
        <Skeleton height={120} className="w-full" />
        <Skeleton height={120} className="w-full" />
      </div>
    </div>
  );
}

export default CPeducationSkeleton;
