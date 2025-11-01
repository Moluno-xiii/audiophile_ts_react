"use client";
import { DeviceDetails } from "@/app/types";
import GoBack from "./GoBack";
import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/navigation";
import AudioGearSectionFooter from "./AudioGearSectionFooter";
import SpeakerDisplay from "./SpeakerDisplay";

interface Props {
  data: DeviceDetails[];
  id: string;
}

const ProuctDetailsContainer: React.FC<Props> = ({ data, id }) => {
  const router = useRouter();
  const deviceData = data.find((h) => h.id === id);
  return (
    <section className="mx-auto flex max-w-[1110px] flex-col">
      <GoBack />
      <section
        className="flex flex-col justify-between gap-x-4 md:gap-x-[124.5px] lg:flex-row"
        aria-labelledby="device description section"
      >
        <div className="bg-light flex flex-col items-center justify-center rounded-md max-lg:mb-13 md:px-24 md:py-16">
          <Image
            src={deviceData!.mainImage}
            alt={`Image for ${deviceData?.title}`}
            width={349.24}
            height={386}
            className="flex-1"
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
            <p>add and remove f</p>
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
        className="mt-40 flex flex-row justify-between gap-x-[125px]"
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
        <div className="flex w-[350px] flex-col gap-y-8">
          <h2 className="text-darker text-start text-[32px] font-bold uppercase">
            in the box
          </h2>
          <ul className="flex flex-col gap-y-2">
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
        className="mt-40 flex flex-row gap-x-[30px]"
      >
        <div className="flex flex-col gap-y-8">
          <Image
            height={280}
            width={445}
            alt={`Sample images for ${deviceData?.title}`}
            src={deviceData!.images[0].src}
            className="max-h-[280px]"
          />
          <Image
            height={280}
            width={445}
            alt={`Sample images for ${deviceData?.title}`}
            src={deviceData!.images[1].src}
            className=""
          />
        </div>
        <div>
          <Image
            height={592}
            width={635}
            alt={`Sample images for ${deviceData?.title}`}
            src={deviceData!.images[2].src}
          />
        </div>
      </section>
      <section
        aria-labelledby="similar devices you might like section"
        className="mt-40 flex flex-col gap-y-16"
      >
        <h2 className="text-[32px] font-bold uppercase">you may also like</h2>
        <ul className="flex flex-row gap-x-[30px]">
          {deviceData?.recommendedDevices.map((device) => (
            <li key={device.id} className="flex flex-col gap-y-8">
              <div className="bg-light min-h-[318px] rounded-lg px-[100px] py-[62px]">
                <Image
                  alt={`Image of ${device.name}`}
                  height={193}
                  width={148.31}
                  src={device.imageSrc}
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
      <div className="-mt-60">
        <AudioGearSectionFooter />
      </div>
    </section>
  );
};

export default ProuctDetailsContainer;
