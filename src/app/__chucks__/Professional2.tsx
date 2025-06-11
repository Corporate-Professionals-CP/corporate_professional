"use client";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { prof1, prof2, prof3, prof4, prof5 } from "@/assets";

import Person2 from "./Person2";

const people = [
  {
    img: prof1,
    comment:
      "I connect with industry leaders, stay updated on trends, and find mentorship to grow my career.",
    user: "Aisha",
    job: "Marketing Manager",
  },
  {
    img: prof2,
    comment:
      "Finally! An app with like-minded people that share knowledgeable information that actually helps navigate real life situations. Well done!",
    user: "James",
    job: "Software Engineer",
  },
  {
    img: prof3,
    comment:
      "So far, so good! Broad network for communicating with employers across industries and also for finding the right job for yourself.",
    user: "Lola",
    job: "UX Designer",
  },
  {
    img: prof4,
    comment:
      "I've been able to meet new people, expand my network, and even attend some workshops. I like this platform, and I can see myself using it every day.",
    user: "Kwame",
    job: "Product Manager",
  },
  {
    img: prof5,
    comment:
      "Very professional platform, the most inspiring I have to date. I got help to draft up my CV which has dramatically increased the number of offers I've been receiving!",
    user: "Zara",
    job: "Data Analyst",
  },
];

export default function Professional2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const selectedIndex = emblaApi.selectedScrollSnap();
    setActiveIndex(selectedIndex);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="professionals" className="pt-[123px] blurprofessional">
      <div className="max-w-[984px] mx-auto mb-[64px] px-6">
        <h3 className="text-primary">How they use it</h3>
        <p className="text-[#050505] font-medium text-[39px] max-sm:text-[24px]">
          Meet our Professionals
        </p>
      </div>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex gap-5 px-6">
          {people.map((person, index) => (
            <div key={index} className="embla__slide flex-[0_0_300px]">
              <Person2
                index={index}
                img={person.img}
                comment={person.comment}
                user={person.user}
                job={person.job}
                activeIndex={activeIndex}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
