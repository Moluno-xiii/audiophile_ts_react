"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "./Button";

const SpeakerDisplay: React.FC = () => {
  const router = useRouter();
  return (
    <ul className="mx-auto mb-24 grid max-w-[1110px] grid-cols-1 gap-[30px] max-md:gap-y-20 md:grid-cols-3 lg:mb-[198px]">
      {speakersData.map((image) => (
        <li
          key={image.title}
          className="bg-light relative flex h-[204px] cursor-pointer flex-col items-center overflow-visible rounded-lg pb-[30px]"
        >
          <div className="absolute -top-16 left-1/2 -translate-x-1/2">
            <Image
              alt={`${image.title} image`}
              width={125}
              height={126}
              src={image.imageUrl}
              className=""
            />
          </div>

          <div className="mt-30 flex flex-col items-center gap-y-2 uppercase">
            <p className="text-dark text-[25px] font-bold">{image.title}</p>
            <Button
              text="Shop"
              variant="link"
              onClick={() => router.push(`/${image.title}`)}
              // additionalStyles="mt-[15px]"
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SpeakerDisplay;

const speakersData = [
  {
    imageUrl: "/headphone-image.png",
    title: "headphones",
  },
  {
    imageUrl: "/speaker-image.png",
    title: "speakers",
  },
  {
    imageUrl: "/earphone-image.png",
    title: "earphones",
  },
];
