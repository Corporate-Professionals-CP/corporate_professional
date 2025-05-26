import CPprofileCardSmall from "@/components/CPprofileCardSmall";
import Link from "next/link";

function RightSection() {
  return (
    <section className="w-[420]  p-4 ">
      <div className="rounded-2xl shadow-[0px_12px_16px_-4px_#1018280A,0px_4px_6px_-2px_#10182808] flex flex-col  h-full">
        <div className="flex justify-between items-start mb-6 border-b border-[#F1F5F9] p-4">
          <h3 className="font-medium text-sm text-slate">Manage my network</h3>
        </div>

        <ul className="p-2 flex-1">
          <li>
            <Link
              className="flex justify-between items-center px-2 py-3 text-[#64748B] text-sm"
              href={"/dashboard/network/connection"}
            >
              <span>Connections</span>
              <span>120</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex justify-between items-center px-2 py-3 text-[#64748B] text-sm"
              href={"/dashboard/network/pending"}
            >
              <span>Pending requests</span>
              <span>9</span>
            </Link>
          </li>
        </ul>
        <div>
          <h3 className="font-medium text-sm text-slate p-4">
            Add to your network
          </h3>
          <CPprofileCardSmall />
          <CPprofileCardSmall />
          <CPprofileCardSmall />
          <CPprofileCardSmall />
        </div>
      </div>
    </section>
  );
}

export default RightSection;
