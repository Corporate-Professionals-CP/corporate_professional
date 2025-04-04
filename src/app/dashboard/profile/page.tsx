import CPcheckbox from "@/components/CPcheckbox";
import CPInput from "@/components/CPInput";
import CPModal from "@/components/CPModal";
import CPprofileImg from "@/components/CPprofileImg";
import CPselect from "@/components/CPselect";
import React from "react";

function page() {
  return (
    <CPModal>
      <div className="flex text-[#020617] p-2">
        <div className="flex flex-col gap-8">{/* icons */}</div>
        <div className="w-[280] border-[#E2E8F0] border-r py-8 ">
          <h3 className="mb-5 text-lg font-medium px-4.5">Profile</h3>
          <ul>
            <Item text="General" />
            <Item text="Contact" />
            <Item text="Work Experience" />
            <Item text="Volunteering" />
            <Item text="Education" />
            <Item text="Certifications" />
            <Item text="Skills" />
          </ul>
        </div>
        <div className="flex-1 p-4.5">
          <div className="flex items-center gap-4 mb-8">
            <CPprofileImg size={63} />
            <p className="font-medium text-sm ">Update image</p>
          </div>
          <form>
            <div className="mb-5">
              <label className="mb-2 text-sm text-[#475569]">Name</label>
              <CPInput placeholder="Fullname" />
            </div>
            <div className="mb-5">
              <label className="mb-2 text-sm text-[#475569]">
                What do you do?
              </label>
              <CPInput placeholder="Fullname" />
            </div>
            <div className="mb-5">
              <label className="mb-2 text-sm text-[#475569]">
                Which industry best describes your work?
              </label>
              <CPselect />
            </div>
            <div className="mb-5">
              <label className="mb-2 text-sm text-[#475569]">Location</label>
              <CPInput placeholder="Where are you based?" />
            </div>
            <div className="mb-5">
              <label className="mb-2 text-sm text-[#475569]">Pronouns</label>
              <CPInput placeholder="They/them, etc" />
            </div>
            <div className="mb-5">
              <label className="mb-2 text-sm text-[#475569]">
                Are you a recruiter?
              </label>
              <div className="flex gap-2">
                <CPcheckbox text="Yes" />
                <CPcheckbox text="No" />
              </div>
            </div>
            <div className="mb-5">
              <label className="mb-2 text-sm text-[#475569]">
                Who should see your profile?
              </label>
              <div className="flex gap-2">
                <CPcheckbox text="Public" />
                <CPcheckbox text="Private" />
              </div>
            </div>
            <div className="mb-5">
              <label className="mb-2 text-sm text-[#475569]">
                How experienced are you?
              </label>
              <CPselect />
            </div>
            <div className="mb-5">
              <label className="mb-2 text-sm text-[#475569]">About</label>
              <CPInput type="textarea" className="h-[169]" />
            </div>
          </form>
        </div>
      </div>
    </CPModal>
  );
}

const Item = ({ text }: { text: string }) => {
  return (
    <li className="text-sm py-3 px-4.5 flex items-center justify-between text-[#475569]">
      {text}
    </li>
  );
};
export default page;
