import Image from "next/image";

const AudioGearSectionFooter = () => {
  return (
    <section className="mx-auto my-24 flex max-w-[1110px] flex-col gap-x-[125px] lg:my-[200px] lg:flex-row">
      <div className="h-[300px] w-full bg-[url(/listener.png)] bg-cover bg-center bg-no-repeat lg:hidden"></div>
      <div className="text-darker flex flex-1 flex-col items-center justify-center gap-y-8 text-center text-[40px] font-bold max-lg:mx-auto max-lg:mt-[63px] max-lg:max-w-[573px]">
        <h3 className="text-[40px] font-bold uppercase">
          Bringing you the <span className="text-primary">best</span> audio
          gear{" "}
        </h3>
        <p className="text-darker/50 text-[15px] leading-[25px]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
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
  );
};

export default AudioGearSectionFooter;
