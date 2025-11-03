"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import AudioGearSectionFooter from "./ui/reusables/AudioGearSectionFooter";
import Button from "./ui/reusables/Button";
import SpeakerDisplay from "./ui/reusables/SpeakerDisplay";

type Props = {
  devicesData: {
    imageSrc: string;
    isNewProduct: boolean;
    title: string;
    paragraph: string;
    route: string;
    id: string;
  }[];
};

const DevicePageComponent: React.FC<Props> = ({ devicesData }) => {
  const router = useRouter();
  return (
    <div className="bg-lighter mb-[120px]">
      <section className="mx-auto max-w-[1110px] px-1 md:px-3">
        <ul className="mb-[120px] flex flex-col gap-y-[120px] px-0 md:px-10 lg:gap-y-40 lg:px-0">
          {devicesData.map((headphone, index) => (
            <li
              key={headphone.imageSrc}
              className={`flex flex-col justify-between gap-x-4 md:gap-x-24 lg:flex-row ${index % 2 === 0 && "lg:flex-row-reverse"}`}
            >
              <div className="bg-light flex flex-col items-center justify-center rounded-md max-lg:mb-13 md:px-24 md:py-16">
                <Image
                  src={headphone.imageSrc}
                  alt={`Image for ${headphone.title}`}
                  width={349.24}
                  height={386}
                  className="flex-1"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-center gap-y-6">
                {headphone.isNewProduct && (
                  <p className="text-primary tracking-[10px]">NEW PRODUCT</p>
                )}
                <h2 className="text-darker mx-auto max-w-xl text-center text-[28px] font-bold uppercase md:text-[44px] lg:text-[56px]">
                  {headphone.title}
                </h2>
                <p className="text-darker/50 max-w-xl text-center text-[15px]">
                  {headphone.paragraph}
                </p>
                <Button
                  text="see product"
                  variant="default"
                  onClick={() => router.push(headphone.route)}
                />
              </div>
            </li>
          ))}
        </ul>
        <SpeakerDisplay />
        <AudioGearSectionFooter />
      </section>
    </div>
  );
};

export default DevicePageComponent;
