"use client";
import CPpostCard from "@/components/CPpostCard";
import CPprofileImg from "@/components/CPprofileImg";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import { fetchFeeds, fetchFeedsNetwork } from "./functions";
import CreatePostModal from "./CreatePostModal";
import MIddleSectionContainer from "./MIddleSectionContainer";
import CPpostCardSkeleton from "@/components/CPpostCardSkeleton";

function MiddleSection() {
  const [selectTab, setSelectTab] = useState(0);
  const [createmodal, setCreatemodal] = useState(false);

  return (
    <MIddleSectionContainer>
      <>
        <div className="flex">
          <Tab
            text="Highlights"
            setSelectTab={setSelectTab}
            tabnumber={0}
            selectTab={selectTab}
          />
          <Tab
            text="My Network"
            setSelectTab={setSelectTab}
            tabnumber={1}
            selectTab={selectTab}
          />
        </div>
        <div className="border-y border-[#E2E8F0] flex p-6 gap-4 items-center">
          <CPprofileImg size={48} />
          <p
            className=" text-[#94A3B8] flex-1 px-2 py-2 min-h-[40]"
            onClick={() => setCreatemodal(true)}
          >
            What’s on your mind...?
          </p>
        </div>
        {selectTab == 0 && <Feeds />}
        {selectTab == 1 && <Networks />}
        {createmodal && <CreatePostModal setCreatemodal={setCreatemodal} />}
      </>
    </MIddleSectionContainer>
  );
}

const Tab = ({
  text,
  setSelectTab,
  selectTab,
  tabnumber,
}: {
  text: string;
  selectTab: number;
  setSelectTab: Dispatch<SetStateAction<number>>;
  tabnumber: number;
}) => {
  return (
    <div
      className="px-5 pt-5 gap-5 w-1/2 text-center text-slate font-medium flex flex-col items-center  cursor-pointer"
      onClick={() => setSelectTab(tabnumber)}
    >
      <span>{text}</span>
      <div
        className={`w-[54] h-[3] ${
          selectTab == tabnumber ? "bg-primary" : "bg-white"
        }`}
        style={{ borderRadius: "6px 6px 0px 0px" }}
      ></div>
    </div>
  );
};

const getKey = (
  pageIndex: number,
  previousPageData: {
    next_cursor: string;
  }
) => {
  if (pageIndex === 0) return "/feed/";
  if (!previousPageData?.next_cursor) return null; // No more pages
  return `/feed/?cursor=${previousPageData.next_cursor}`;
};

const Feeds = () => {
  const { data, size, setSize, isValidating, isLoading, error } =
    useSWRInfinite(getKey, fetchFeeds, {
      revalidateFirstPage: false,
      revalidateOnFocus: false,
    });

  const feeds = data?.flatMap((page) => page.main_posts) || [];
  const observerRef = useRef<HTMLDivElement | null>(null);

  // Check if we can load more data
  const canLoadMore = data && data[data.length - 1]?.next_cursor;
  const isLoadingMore = isValidating && data && data.length > 0;

  // Infinite scroll trigger
  useEffect(() => {
    const currentObserver = observerRef.current;
    if (!currentObserver || !canLoadMore || isLoadingMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && canLoadMore && !isLoadingMore) {
          console.log("Loading more posts...");
          setSize(size + 1);
        }
      },
      {
        rootMargin: "100px",
        threshold: 0.1,
      }
    );

    observer.observe(currentObserver);

    return () => {
      observer.disconnect();
    };
  }, [canLoadMore, isLoadingMore, size, setSize]);

  // Error state
  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500 mb-4">Failed to load posts</p>
        <button
          onClick={() => setSize(1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  // Initial loading state
  if (isLoading) {
    return <FeedsSkeleton />;
  }

  // Empty state
  if (!feeds.length) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>No posts available</p>
      </div>
    );
  }

  return (
    <div>
      {/* Render posts */}
      {feeds.map((post) => (
        <CPpostCard key={post.id} post={post} />
      ))}

      {/* Loading more indicator */}
      {isLoadingMore && (
        <div className="flex justify-center py-4">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
          <span className="ml-2 text-gray-600">Loading more posts...</span>
        </div>
      )}

      {/* Intersection observer trigger - only show if we can load more */}
      {canLoadMore && !isLoadingMore && (
        <div ref={observerRef} className="h-4" />
      )}

      {/* End of feed message */}
      {!canLoadMore && feeds.length > 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>Youve reached the end of the feed!</p>
        </div>
      )}
    </div>
  );
};

const Networks = () => {
  const { data, isLoading } = useSWR("/feed/network", fetchFeedsNetwork);
  return (
    <div>
      {isLoading ? (
        <FeedsSkeleton />
      ) : (
        data?.map((post) => <CPpostCard key={post.id} post={post} />)
      )}
    </div>
  );
};

const FeedsSkeleton = () => {
  return (
    <div>
      <CPpostCardSkeleton />
      <CPpostCardSkeleton />
      <CPpostCardSkeleton />
    </div>
  );
};

export default MiddleSection;
