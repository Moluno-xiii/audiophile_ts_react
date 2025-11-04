import Image from "next/image";
import LinkComponent from "./LinkComponent";
import { LuInstagram } from "react-icons/lu";
import { FaTwitter, FaFacebookSquare } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-darker">
      <div className="mx-auto flex max-w-[1110px] flex-col gap-y-9 px-3 pb-12 md:px-5">
        <section className="flex flex-col justify-between max-lg:gap-y-8 lg:flex-row">
          <Image
            src={"/audiophile.svg"}
            alt="Audiophile logo"
            width={143}
            height={25}
            className="border-primary border-t-2 pt-[75px] max-md:self-center"
          />
          <div className="pt-[75px]">
            <LinkComponent />
          </div>
        </section>
        <section className="flex flex-col justify-between lg:flex-row">
          <p className="flex-1 text-[15px] text-white/50">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we&apos;re open 7 days a week.
          </p>
          <ul
            aria-labelledby="social media links"
            className="hidden flex-1 flex-row justify-end gap-x-1 self-end text-white lg:flex"
          >
            <li>
              <FaFacebookSquare
                size={24}
                className="hover:text-primary cursor-pointer transition-all duration-200"
              />
            </li>
            <li>
              <FaTwitter
                size={24}
                className="hover:text-primary cursor-pointer transition-all duration-200"
              />
            </li>
            <li>
              <LuInstagram
                size={24}
                className="hover:text-primary cursor-pointer transition-all duration-200"
              />
            </li>
          </ul>
        </section>
        <div className="flex-col items-center justify-between max-lg:flex md:flex-row">
          <p className="mt-5 text-[15px] text-white/50">
            Copyright 2021. All Rights Reserved
          </p>
          <ul
            aria-labelledby="social media links"
            className="flex flex-row gap-x-3 text-white max-md:mt-6 md:gap-x-1 lg:hidden"
          >
            <li>
              <FaFacebookSquare
                size={24}
                className="hover:text-primary cursor-pointer transition-all duration-200"
              />
            </li>
            <li>
              <FaTwitter
                size={24}
                className="hover:text-primary cursor-pointer transition-all duration-200"
              />
            </li>
            <li>
              <LuInstagram
                size={24}
                className="hover:text-primary cursor-pointer transition-all duration-200"
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
