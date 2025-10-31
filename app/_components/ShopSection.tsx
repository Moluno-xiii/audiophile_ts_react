"use client";

import Image from "next/image";
import Button from "./ui/reusables/Button";
import { useRouter } from "next/navigation";

const ShopSection: React.FC = () => {
  const router = useRouter();
  return (
    <section className="bg-lighter 24 px-5 pt-24 lg:pt-52">
      <ul className="mx-auto mb-24 grid max-w-[1110px] grid-cols-1 gap-[30px] md:grid-cols-3 lg:mb-[198px]">
        {shopSectionImages.map((image) => (
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
      <section className="bg-primary mx-auto mb-8 flex max-w-[1110px] flex-col items-center justify-center gap-16 px-[95px] pt-[96px] text-center max-lg:py-16 lg:mb-12 lg:flex-row lg:gap-20">
        <Image
          src={"/big-speaker.png"}
          alt="speaker image"
          height={493}
          width={410.23}
          className="hidden lg:block"
        />
        <Image
          src={"/big-speaker.png"}
          alt="speaker image"
          height={237}
          width={197.21}
          className="block lg:hidden"
        />
        <div className="flex flex-col gap-y-6 max-lg:items-center">
          <h2 className="text-lighter text-[56px] font-bold max-lg:max-w-[261px]">
            ZX9 SPEAKER
          </h2>
          <p className="text-lighter/75 max-w-[349px]">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button
            text="see product"
            variant="transparent"
            additionalStyles="mt-4 bg-darker hover:bg-[#4c4c4c]"
          />
        </div>
      </section>
      <section className="mx-auto mb-8 flex max-w-[1110px] flex-col items-center bg-[#DDDDDD] pl-24 md:flex-row md:justify-between lg:mb-12">
        <div className="flex flex-1 flex-col gap-y-8">
          <h3 className="text-2xl font-bold">ZX7 SPEAKER</h3>
          <Button text="see product" variant="transparent" />
        </div>
        <Image
          alt="big speaker image"
          src={"/bigger-speaker.png"}
          height={863}
          width={1247.24}
          className="flex-1"
        />
      </section>
      <section className="mx-auto flex max-w-[1110px] flex-col justify-between gap-[11px] md:flex-row lg:gap-[30px]">
        <Image
          src="/yxi-earphone.png"
          alt="YX1 earphones image"
          width={540}
          height={320}
          className="flex-1 rounded-md"
        />
        <div className="bg-light flex flex-1 flex-col items-center justify-center gap-y-8 rounded-md">
          <h3 className="text-2xl font-bold">YX1 EARPHONES</h3>
          <Button text="see product" variant="transparent" />
        </div>
      </section>
      <section className="mx-auto my-24 flex max-w-[1110px] flex-col gap-x-[125px] lg:my-[200px] lg:flex-row">
        {/* <Image
          alt="Image of a user with headphones"
          src={"/listener.png"}
          height={300}
          width={689}
          className="mx-auto block flex-1 rounded-lg lg:hidden"
        /> */}
        <div className="h-[300px] w-full bg-[url(/listener.png)] bg-cover bg-center bg-no-repeat lg:hidden"></div>
        <div className="text-darker flex flex-1 flex-col items-center justify-center gap-y-8 text-center text-[40px] font-bold max-lg:mx-auto max-lg:mt-[63px] max-lg:max-w-[573px]">
          <h3 className="text-[40px] font-bold uppercase">
            Bringing you the <span className="text-primary">best</span> audio
            gear{" "}
          </h3>
          <p className="text-darker/50 text-[15px] leading-[25px]">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <Image
          alt="Image of a user with headphones"
          src={"/listener.png"}
          height={588}
          width={540}
          className="hidden flex-1 rounded-lg lg:block"
        />
      </section>
    </section>
  );
};

export default ShopSection;

const shopSectionImages = [
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
