import Image, { StaticImageData } from "next/image";

export default function Person2({
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
  console.log(isActive);
  return (
    <div className="w-[300px] h-[560px] shrink-0">
      <div className="h-[300px] p-2 bg-white rounded-lg mb-4">
        <Image
          src={img}
          alt={`${user} - ${job}`}
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
      {true && (
        <div className="p-3 bg-white rounded-2xl careershadow animate-fadeIn">
          <div className="text-primary mb-10">{comment}</div>
          <div>
            <p className="text-slate mb-0.5">{user}</p>
            <p className="text-[#64748B]">{job}</p>
          </div>
        </div>
      )}
    </div>
  );
}
