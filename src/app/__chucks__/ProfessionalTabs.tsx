import { CPbuttonTwo } from "@/components/CPbutton";
import { useState } from "react";

const ProfessionalTabs = () => {
  const [activetab, setActivetab] = useState("professional");

  return (
    <>
      <section className="pt-[155] max-w-[988] m-auto mb-[12] px-6">
        <div className="p-2 rounded-full border-[#282A74] border flex justify-between mb-6 max-md:hidden ">
          <button
            className={`w-[221] text-center ${
              activetab == "professional"
                ? "bg-[#282A74] text-white "
                : "text-[#050505]"
            }  rounded-full p-3`}
            onClick={() => setActivetab("professional")}
          >
            Professional Profiles
          </button>
          <button
            className={`w-[221] text-center ${
              activetab == "searchable"
                ? "bg-[#282A74] text-white "
                : "text-[#050505]"
            } rounded-full p-3`}
            onClick={() => setActivetab("searchable")}
          >
            Searchable Directory
          </button>
          <button
            className={`w-[221] text-center ${
              activetab == "job" ? "bg-[#282A74] text-white " : "text-[#050505]"
            }  rounded-full p-3`}
            onClick={() => setActivetab("job")}
          >
            Job & Content Feed
          </button>
          <button
            className={`w-[221] text-center ${
              activetab == "profiles"
                ? "bg-[#282A74] text-white "
                : "text-[#050505]"
            }  rounded-full p-3`}
            onClick={() => setActivetab("profiles")}
          >
            Professional Profiles
          </button>
        </div>
        <div className="bg-[#F8FAFC] pt-10  px-[103] rounded-2xl max-md:hidden">
          <div className=" text-center mb-[72] flex flex-col items-center w-[460] m-auto">
            <p className="mb-6">
              Build a profile that showcases your skills, experience, and
              achievements to the right people.
            </p>
            <CPbuttonTwo className="bg-primary"> Learn more</CPbuttonTwo>
          </div>
          <div className="w-full bg-white h-[290]"></div>
        </div>

        <ProfessionalInput />
      </section>
    </>
  );
};

function ProfessionalInput() {
  return (
    <div className="bg-[#F8FAFC] pt-10  px-6 rounded-2xl hidden max-md:block">
      <div className=" text-center mb-[72] flex flex-col items-center w-max-[460] m-auto">
        <p className="mb-6">
          Build a profile that showcases your skills, experience, and
          achievements to the right people.
        </p>
        <CPbuttonTwo className="bg-primary"> Learn more</CPbuttonTwo>
      </div>
      <div className="w-full bg-white h-[290]"></div>
    </div>
  );
}

export default ProfessionalTabs;
