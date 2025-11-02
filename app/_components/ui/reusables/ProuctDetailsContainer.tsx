"use client";
import { DeviceDetails } from "@/app/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AudioGearSectionFooter from "./AudioGearSectionFooter";
import Button from "./Button";
import GoBack from "./GoBack";
import SpeakerDisplay from "./SpeakerDisplay";

interface Props {
  data: DeviceDetails[];
  id: string;
}

const ProuctDetailsContainer: React.FC<Props> = ({ data, id }) => {
  const [itemAmount, setItemAmount] = useState(1);
  const router = useRouter();
  const deviceData = data.find((h) => h.id === id);

  const decrementItemAmount = () => {
    itemAmount >= 1 ? setItemAmount(itemAmount - 1) : null;
  };

  const incrementAmount = () => {
    setItemAmount(itemAmount + 1);
  };
  return (
    <section className="mx-auto flex max-w-[1110px] flex-col px-6 md:px-10">
      <GoBack />
      <section
        className="flex flex-col justify-between gap-x-4 md:flex-row md:gap-x-[69px] lg:gap-x-[124.5px]"
        aria-labelledby="device description section"
      >
        <div className="bg-light flex flex-col items-center justify-center rounded-md max-lg:mb-13 md:px-24 md:py-16">
          <Image
            src={deviceData!.mainImage}
            alt={`Image for ${deviceData?.title}`}
            width={349.24}
            height={386}
            className="hidden lg:block lg:flex-1"
          />
          <Image
            src={deviceData!.mainImage}
            alt={`Image for ${deviceData?.title}`}
            width={280}
            height={480}
            className="block max-md:size-[327px] md:min-h-[480px] md:max-w-[200px] lg:hidden"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center gap-y-6">
          {deviceData?.isNewproduct && (
            <p className="text-primary tracking-[10px]">NEW PRODUCT</p>
          )}
          <h2 className="text-darker mx-auto max-w-xl text-start text-[28px] font-bold uppercase md:text-[44px] lg:text-[56px]">
            {deviceData?.title}
          </h2>
          <p className="text-darker/50 max-w-xl text-[15px]">
            {deviceData?.description}
          </p>
          <p className="text-darker text-[18px] font-bold">
            $ {deviceData!.price.toLocaleString()}
          </p>
          <div className="flex flex-row items-center gap-x-4">
            head
            <Button
              text="add to cart"
              variant="default"
              //   onClick={() => router.push(deviceData?.route)}
            />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="device features section"
        className="mt-[88px] flex flex-col justify-between gap-x-[125px] gap-y-[120px] md:mt-[120px] lg:mt-40 lg:flex-row"
      >
        <div className="flex flex-1 flex-col gap-y-8">
          <h2 className="text-darker text-start text-[32px] font-bold uppercase">
            features
          </h2>
          <ul className="flex flex-col gap-y-8">
            {deviceData?.features.map((feature) => (
              <li key={feature.id}>
                <p className="text-darker/50">{feature.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-between gap-y-8 md:flex-row lg:w-[350px] lg:flex-col">
          <h2 className="text-darker text-start text-[32px] font-bold uppercase max-lg:flex-1">
            in the box
          </h2>
          <ul className="flex flex-col gap-y-2 max-lg:flex-1">
            {deviceData?.inTheBox.map((item) => (
              <li
                className="flex flex-row items-center gap-x-[21px]"
                key={item.title}
              >
                <span className="text-primary text-[15px] font-bold">
                  {item.no}x
                </span>
                <p className="text-darker/50 text-[15px]">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="device images section"
        className="mt-[88px] flex flex-col gap-x-[30px] max-md:gap-y-5 md:mt-[120px] md:flex-row lg:mt-40"
      >
        <div className="flex flex-col gap-y-5 lg:gap-y-8">
          <Image
            height={280}
            width={445}
            alt={`Sample images for ${deviceData?.title}`}
            src={deviceData!.images[0].src}
            className="max-lg:h-[174px] lg:max-h-[280px]"
          />
          <Image
            height={280}
            width={445}
            alt={`Sample images for ${deviceData?.title}`}
            src={deviceData!.images[1].src}
            className="max-lg:h-[174px] lg:max-h-[280px]"
          />
        </div>
        <div>
          <Image
            height={592}
            width={635}
            alt={`Sample images for ${deviceData?.title}`}
            src={deviceData!.images[2].src}
            className="max-lg:h-[368px]"
          />
        </div>
      </section>

      <section
        aria-labelledby="similar devices you might like section"
        className="mt-[88px] flex flex-col gap-y-10 md:mt-[120px] md:gap-y-16 lg:mt-40"
      >
        <h2 className="text-darker text-center text-2xl font-bold uppercase md:text-[32px]">
          you may also like
        </h2>
        <ul className="flex flex-col justify-between gap-x-3 gap-y-14 md:flex-row lg:gap-x-[30px]">
          {deviceData?.recommendedDevices.map((device) => (
            <li key={device.id} className="flex flex-col gap-y-8 lg:gap-y-8">
              <div className="bg-light justify-center rounded-lg py-4 max-md:flex md:min-h-[318px] md:px-[37px] md:py-[62px] lg:px-[100px] lg:py-[62px]">
                <Image
                  alt={`Image of ${device.name}`}
                  height={193}
                  width={148.31}
                  src={device.imageSrc}
                  className="max-md:self-center"
                />
              </div>
              <p className="text-darker text-center text-2xl font-bold uppercase">
                {device.name}
              </p>
              <Button
                text="see product"
                onClick={() => router.push(device.deviceUrl)}
                additionalStyles="mt-2 self-center"
              />
            </li>
          ))}
        </ul>
      </section>
      <div className="mt-60">
        <SpeakerDisplay />
      </div>
      <div className="lg:-mt-60">
        <AudioGearSectionFooter />
      </div>
    </section>
  );
};

export default ProuctDetailsContainer;
