import React from "react";
import Skeleton from "react-loading-skeleton";

function CPcommentSkeleton() {
  return (
    <div className="flex gap-3">
      <Skeleton circle width={35} height={35} />
      <div className="flex-1">
        <Skeleton height={60} />
      </div>
    </div>
  );
}

export default CPcommentSkeleton;
