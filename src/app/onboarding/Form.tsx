import CPInput from "@/components/CPInput";
import CPsmallButton from "@/components/CPsmallButton";
import CPstepSlide from "@/components/CPstepSlide";
import Image from "next/image";

function Form() {
  return (
    <section className="bg-white flex-1 rounded-2xl flex justify-center pt-[103]">
      <div className="w-[520]">
        <CPstepSlide />
        <StepTen />

        <div className="flex justify-end gap-2 mt-12">
          <button className="p-3">Back</button>
          <CPsmallButton text="Next" />
        </div>
      </div>
    </section>
  );
}

const StepOne = () => {
  return (
    <>
      <CPText
        majorheading="Let’s start with your name"
        minorheading="Basic Information"
      />
      <CPInput placeholder="Full name" type="text" />
    </>
  );
};
const StepTwo = () => {
  return (
    <>
      <CPText
        majorheading="Tell us a little about your professional journey."
        minorheading="Basic Information"
      />
      <CPInput
        placeholder="Marketing professional passionate about brand growth."
        className="h-[169]"
        type="textarea"
      />
    </>
  );
};

const StepThree = () => {
  return (
    <>
      <CPText
        majorheading="Set a password to keep your account secure."
        minorheading="Basic Information"
      />
      <div className="flex justify-between mb-[8]">
        <p className="text-[14]">Create Password</p>
        <p>Good</p>
      </div>
      <CPInput placeholder="Your password" type="password" />
    </>
  );
};

const StepFour = () => {
  return (
    <>
      <CPText
        majorheading="What do you do?"
        minorheading="Professional Details"
      />

      <CPInput placeholder="Start typing your role..." type="text" />
    </>
  );
};

const StepFive = () => {
  return (
    <>
      <CPText
        majorheading="Which industry best describes your work?"
        minorheading="Professional Details"
      />

      {[
        "Finance & Banking",
        "Technology & IT",
        "Healthcare & Life Sciences",
        "Marketing & Media",
        "Engineering & Manufacturing",
        "Other",
      ].map((data) => (
        <CPSelect key={data} text={data} />
      ))}
      <CPSelect isActive={true} text={"active"} />
    </>
  );
};

const StepSix = () => {
  return (
    <>
      <CPText
        majorheading="How experienced are you?"
        minorheading="Professional Details"
      />

      {["⏳ 0-2", "🏆 3-5", "🚀 6-10", "👑 10+ "].map((data) => (
        <CPSelect key={data} text={data} />
      ))}
    </>
  );
};

const StepSeven = () => {
  return (
    <>
      <CPText
        majorheading="Who should see your profile?"
        minorheading="Professional Details"
      />

      {["Public 🌍", "Private 🔒"].map((data) => (
        <CPSelect key={data} text={data} />
      ))}
    </>
  );
};

const StepEight = () => {
  return (
    <>
      <CPText
        majorheading="Who should see your profile?"
        minorheading="Professional Details"
      />

      {["Yes, I hire talent", "No, I’m here to connect"].map((data) => (
        <CPSelect key={data} text={data} icon={undefined} />
      ))}
    </>
  );
};

const StepNine = () => {
  return (
    <>
      <CPText
        majorheading="Who should see your profile?"
        minorheading="Professional Details"
      />

      {["Yes, I hire talent", "No, I’m here to connect"].map((data) => (
        <CPSelect key={data} text={data} icon={undefined} />
      ))}
    </>
  );
};

const StepTen = () => {
  return (
    <>
      <CPText
        majorheading="What topics interest you the most?"
        minorheading="Engagement & Feed Curation"
      >
        <p className="text-[#64748B]">
          {" "}
          Choose as many topics as you’re interested in!
        </p>
      </CPText>
      <div className="flex gap-2 flex-wrap ">
        <div className="py-2 px-4 rounded-full text-[#475569] bg-[#F8FAFC]">
          Leadership & Management
        </div>
        <div className="py-2 px-4 rounded-full text-[#475569] bg-[#F8FAFC]">
          Leadership
        </div>
      </div>
    </>
  );
};

const CPText = ({
  minorheading,
  majorheading,
  children,
}: {
  minorheading: string;
  majorheading: string;
  children: any;
}) => {
  return (
    <div className="mb-6">
      <p className="mb-8">{minorheading}</p>
      <h4 className="font-medium text-2xl "> {majorheading}</h4>
      {children && children}
    </div>
  );
};

const CPSelect = ({
  text,
  isActive = false,
  icon,
}: {
  text: string;
  isActive?: boolean;
  icon?: typeof Image;
}) => {
  return (
    <div
      className={` ${
        isActive
          ? "border border-primary outline-2 outline-[#7074FF40] outline-offset-1 "
          : ""
      } flex justify-between  mb-2 py-[14px] px-[16px] w-full bg-[#F8FAFC] rounded-[8px] text-sm text-[#334155]`}
    >
      {text}

      {icon && <div>🏆</div>}
      {/* <div>🏆</div> */}
    </div>
  );
};
export default Form;
