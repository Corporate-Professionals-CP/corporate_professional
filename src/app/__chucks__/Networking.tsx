"use client";
import { CPbuttonTwo } from "@/components/CPbutton";
import Image from "next/image";
import { insight, shake, expert } from "@/assets";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
const NetWorking = () => {
  return (
    <section
      id="networking"
      className="max-w-[1008] m-auto mb-[150] px-6 max-sm:mb-[68px]"
    >
      <h2 className="text-center font-medium text-[39px] text-[#050505] leading-[1.2] mb-10 max-sm:text-[24px]">
        Our community goes beyond <br /> simple networking
      </h2>
      <div className="flex justify-between gap-2 max-md:flex-col">
        <div className="max-w-[460] max-md:max-w-full">
          <div className="bg-[#F8FAFC] mb-5 pb-10 rounded-2xl">
            <div className="p-6 max-sm:mb-[30]">
              <h4 className="font-medium text-slate mb-2">
                Unlock Opportunities
              </h4>
              <p className="text-[#475569]">
                Discover jobs, internships, and professional development
                resources.
              </p>
            </div>
            <PelletBox1 />
            <PelletBox2 />
            {/* <div className="flex gap-4 mb-8 overflow-x-auto">
              
            </div> */}
          </div>
          <div className="bg-[#F8FAFC] rounded-2xl">
            <div className="p-6">
              <h4 className="font-medium text-slate mb-2">
                Gain Valuable Insights
              </h4>
              <p className="text-[#475569] mb-6">
                Access mentorship, leadership training, and industry talks.
              </p>
              <Image src={insight} alt="insight" />
            </div>
          </div>
        </div>
        <div className="bg-primary text-white max-w-[460] rounded-2xl p-6  max-md:max-w-full">
          <h4 className="mb-2">Expand Your Network</h4>
          <p className="mb-6">
            Connect with professionals who share your interests and goals
            through structured networking opportunities
          </p>
          <Image src={shake} alt="expand network" className="rounded-lg" />
        </div>
      </div>
      <div className="mt-5 bg-[#F8FAFC] p-6 rounded-2xl">
        <h4 className="font-medium text-slate mb-2">Expert-Led Programs</h4>
        <p className="text-[#475569] mb-6">
          Access workshops, courses, and events led by industry leaders who
          share practical insights you won&apos;t find elsewhere.
        </p>
        <Image src={expert} className="w-full rounded-2xl" alt="expert" />
      </div>
      <div className="flex justify-center mt-16">
        <CPbuttonTwo className="w-[300px] max-sm:w-full" link="/onboarding">
          Create Your Profile
        </CPbuttonTwo>
      </div>
    </section>
  );
};

const Pellet = ({ text }: { text: string }) => {
  return (
    <div className="py-2 px-[18] text-xs rounded-full text-slate bg-white shrink-0 ">
      {text}
    </div>
  );
};
const autoplay = Autoplay({
  delay: 2000,
});
//   {
//   delay: 3000,
//   stopOnInteraction: false,
//   stopOnMouseEnter: true,
//   playOnInit: true,
// }

const PelletBox1 = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="flex gap-4 mb-5 ">
        <Pellet text="Project Manager" /> <Pellet text="HR Specialist" />
        <Pellet text="Accountant" /> <Pellet text="Project Design" />
        <Pellet text="Software Engineer" />
        <Pellet text="Cyber Analyst" />
        <Pellet text="Embedded Engineer" />
      </div>
    </div>
  );
};

const autoplay2 = Autoplay({
  delay: 2500,
});
//   {
//   delay: 3000,
//   stopOnInteraction: false,
//   stopOnMouseEnter: true,
//   playOnInit: true,
// }

const PelletBox2 = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay2]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="flex gap-4 mb-5 ">
        <Pellet text="Accountant" /> <Pellet text="Project Design" />
        <Pellet text="Software Engineer" />
        <Pellet text="Cyber Analyst" />
        <Pellet text="Embedded Engineer" />
      </div>
    </div>
  );
};
export default NetWorking;
