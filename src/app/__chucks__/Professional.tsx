"use client";
import { useEffect, useRef, useState } from "react";
import { prof1, prof2, prof3, prof4, prof5 } from "@/assets";
import Person from "./Person"; // Extracted Person to separate file for cleanliness

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
      "I’ve been able to meet new people, expand my network, and even attend some workshops. I like this platform, and I can see myself using it every day.",
    user: "Kwame",
    job: "Product Manager",
  },
  {
    img: prof5,
    comment:
      "Very professional platform, the most inspiring I have to date. I got help to draft up my CV which has dramatically increased the number of offers I’ve been receiving!",
    user: "Zara",
    job: "Data Analyst",
  },
];

export default function Professional() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Duplicate the data for seamless looping
  const loopedPeople = [...people, ...people];

  // Watch scroll and reset position if near end
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      if (el.scrollLeft >= el.scrollWidth / 2) {
        // Jump back to original (no animation)
        el.scrollLeft = 0;
      }
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="professionals" className="pt-[123px] blurprofessional">
      <div className="max-w-[984px] mx-auto mb-[64px] px-6">
        <h3 className="text-primary">How they use it</h3>
        <p className="text-[#050505] font-medium text-[39px] max-sm:text-[24px]">
          Meet our Professionals
        </p>
      </div>
      <div
        ref={scrollRef}
        className="w-full flex gap-5 overflow-x-scroll snap-x snap-mandatory px-6 scrollbar-hide"
      >
        {loopedPeople.map((p, i) => (
          <Person
            key={i}
            index={i % people.length}
            img={p.img}
            comment={p.comment}
            user={p.user}
            job={p.job}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </section>
  );
}
