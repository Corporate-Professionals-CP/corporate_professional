"use client";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { prof1, prof2, prof3, prof4, prof5 } from "@/assets";
import Person from "./Person";
import { CheveronleftIcon, CheveronrightIcon } from "@/imagecomponents";
// import { ChevronLeft, ChevronRight } from 'lucide-react'; // Or use your preferred icon library

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

export default function Professional() {
  const [activeIndex, setActiveIndex] = useState(0);

  const autoplay = Autoplay({
    delay: 3000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
    playOnInit: true,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
      skipSnaps: false,
      dragFree: false,
    },
    [autoplay]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const selectedIndex = emblaApi.selectedScrollSnap();
    setActiveIndex(selectedIndex);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="professionals" className="pt-[123px] blurprofessional">
      <div className="max-w-[984px] mx-auto mb-[64px] px-6">
        <h3 className="text-primary">HOW THEY USE IT</h3>
        <p className="text-[#050505] font-medium text-[39px] max-sm:text-[24px]">
          Meet our Professionals
        </p>
      </div>

      <div className="relative">
        {/* Previous Button */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
          onClick={scrollPrev}
          aria-label="Previous slide"
        >
          <CheveronleftIcon />
        </button>

        {/* Next Button */}
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
          onClick={scrollNext}
          aria-label="Next slide"
        >
          <CheveronrightIcon />
        </button>

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {people.map((person, index) => (
              <div
                key={index}
                className="embla__slide flex-[0_0_auto] min-w-0 pl-4 first:pl-6"
              >
                <Person
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
      </div>
    </section>
  );
}
