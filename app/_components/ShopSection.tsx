import Image from "next/image";
import Button from "./ui/reusables/Button";
import AudioGearSectionFooter from "./ui/reusables/AudioGearSectionFooter";
import SpeakerDisplay from "./ui/reusables/SpeakerDisplay";

const ShopSection: React.FC = () => {
  return (
    <section className="bg-lighter 24 px-5 pt-24 lg:pt-52">
      <SpeakerDisplay />
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
      <section className="mx-auto mb-8 flex max-w-[1110px] flex-row items-center justify-between bg-[#DDDDDD] px-3 max-md:gap-x-4 md:pl-24 lg:mb-12">
        <div className="flex flex-1 flex-col gap-y-8">
          <h3 className="text-2xl font-bold">ZX7 SPEAKER</h3>
          <Button text="see product" variant="transparent" />
        </div>
        <Image
          alt="big speaker image"
          src={"/bigger-speaker.png"}
          height={863}
          width={1247.24}
          className="hidden flex-1 md:block"
        />
        <Image
          alt="big speaker image"
          src={"/bigger-speaker.png"}
          height={200}
          width={200}
          className="block md:hidden"
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
        <div className="bg-light flex flex-1 flex-col items-center justify-center gap-y-8 rounded-md max-md:p-10">
          <h3 className="text-2xl font-bold">YX1 EARPHONES</h3>
          <Button text="see product" variant="transparent" />
        </div>
      </section>
      <AudioGearSectionFooter />
    </section>
  );
};

export default ShopSection;
