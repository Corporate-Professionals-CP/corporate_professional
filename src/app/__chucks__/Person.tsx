import { useInView } from "react-intersection-observer";
import Image, { StaticImageData } from "next/image";
import { useEffect } from "react";

export default function Person({
  img,
  comment,
  index,
  activeIndex,
  setActiveIndex,
}: {
  img: StaticImageData;
  comment: string;
  index: number;
  activeIndex: number;
  setActiveIndex: (i: number) => void;
}) {
  const { ref, inView } = useInView({ threshold: 0.6 });

  useEffect(() => {
    if (inView) setActiveIndex(index);
  }, [inView, index, setActiveIndex]);

  const isActive = activeIndex === index;

  return (
    <div ref={ref} className="w-[300px] h-[560px] shrink-0 snap-center">
      <div className="h-[300px] p-2 bg-white rounded-lg mb-4">
        <Image
          src={img}
          alt="prof"
          className="rounded-lg w-full object-cover"
        />
      </div>
      {isActive && (
        <div className="p-3 bg-white rounded-2xl careershadow">
          <div className="text-primary mb-10">{comment}</div>
          <div>
            <p className="text-slate mb-0.5">Aisha</p>
            <p className="text-[#64748B]">Marketing Manager</p>
          </div>
        </div>
      )}
    </div>
  );
}
