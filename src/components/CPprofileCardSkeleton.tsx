import React from "react";
import Skeleton from "react-loading-skeleton";

const CPprofileCardSkeleton = () => {
  return (
    <div className="flex gap-5 items-center p-3.5">
      {/* Circle Avatar */}
      <Skeleton circle height={48} width={48} />
      {/* Text Lines */}
      <div className="flex-1">
        <div className="mb-1 w-1/3">
          <Skeleton height={20} />
        </div>
        <div className="w-2/3">
          <Skeleton height={20} />
        </div>
      </div>
      <div className="w-16 rounded-[5px] overflow-hidden">
        {/* Button Placeholder */}
        <Skeleton height={34} /> {/* ~64px */}
      </div>
    </div>
  );
};

export default CPprofileCardSkeleton;
