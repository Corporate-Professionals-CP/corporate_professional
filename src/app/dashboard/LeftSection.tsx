import {
  BookmarkIcon,
  HomeIcon,
  NotificationIcon,
  SearchIcon,
  WifiIcon,
} from "@/imagecomponents";
import DashboardModals from "./DashboardModals";

function LeftSection() {
  return (
    <section className="flex-1 py-4 p-8 flex justify-end">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-10">
          <HomeIcon />
          <SearchIcon />
          <WifiIcon />
          <BookmarkIcon />
          <NotificationIcon />
        </div>
        <div></div>
      </div>
      {/* SEARCH MODAL */}
      <DashboardModals />
    </section>
  );
}

export default LeftSection;
