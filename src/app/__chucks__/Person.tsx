import Image, { StaticImageData } from "next/image";
import { useState } from "react";

export default function Person({
  img,
  comment,
  index,
  user,
  job,
  activeIndex,
}: {
  img: StaticImageData;
  comment: string;
  index: number;
  activeIndex: number;
  user: string;
  job: string;
}) {
  const isActive = activeIndex === index;
  const [hovered, setHovered] = useState(false);
  console.log(hovered, "HOvered");
  return (
    <div
      className="w-[280px] max-w-[280px] "
      onMouseEnter={() => {
        setHovered(() => true);
      }}
      onMouseLeave={() => {
        setHovered(() => false);
      }}
    >
      {/* Image Container */}
      <div className="relative mb-6">
        <div className="h-[320px] p-2 bg-white rounded-2xl mb-4 careershadow">
          <Image
            src={img}
            alt={`${user} - ${job}`}
            className="rounded-xl w-full h-full object-cover"
            priority={index < 3}
          />
        </div>
      </div>

      {/* Description Container - Fixed Height */}
      <div className="min-h-[200px] ">
        <div
          className={`transition-all duration-500 ease-in-out ${
            isActive || hovered
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
        >
          <div
            className={`bg-white rounded-2xl p-3 careershadow block ${
              isActive || hovered ? "block" : ""
            } `}
          >
            <p className="text-primary text-base leading-relaxed mb-8">
              {comment}
            </p>
            <div>
              <p className="text-slate mb-0.5">{user}</p>
              <p className="text-[#64748B] text-sm">{job}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
