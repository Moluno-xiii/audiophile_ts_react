import Image from "next/image";
import Button from "./ui/reusables/Button";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-darker">
      <section className="mx-auto flex max-w-[1110px] flex-col items-center justify-between gap-20 bg-center bg-no-repeat px-5 py-10 text-center max-lg:items-center max-lg:justify-center max-lg:bg-[url(/earphone-hero-large.png)] lg:flex-row">
        <div
          aria-labelledby="product description container"
          className="flex flex-col gap-y-6"
        >
          <h2 className="text-lighter/50 self-center text-sm tracking-[10px]">
            NEW PRODUCT
          </h2>
          <p className="text-lighter text-[56px] font-bold max-lg:max-w-[396px]">
            XX99 MARK II HEADPHONES{" "}
          </p>
          <p className="text-lighter/75 max-w-[350px] self-center text-[15px] font-medium">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button
            text="see product"
            additionalStyles="mt-4 self-center"
            variant="default"
          />
        </div>
        <div aria-labelledby="headphone image container" className="">
          <Image
            className="hidden lg:block"
            src={"/earphone-hero-large.png"}
            height={886}
            width={708.8}
            alt="Headphone image"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
