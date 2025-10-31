import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import LinkComponent from "./LinkComponent";
import { MdMenu } from "react-icons/md";

const Header: React.FC = () => {
  return (
    <header className="border-b-lighter/20 bg-darker flex flex-row items-center justify-between border-b px-5 pt-8 pb-9">
      <div className="flex flex-row gap-x-11">
        <MdMenu size={24} className="block lg:hidden" color="white" />
        <Image
          height={25}
          width={143}
          alt="Audiophile logo"
          src={"/audiophile.svg"}
        />
      </div>
      <div className="hidden lg:block">
        <LinkComponent />
      </div>
      <AiOutlineShoppingCart
        height={20}
        width={23.33}
        color="white"
        className="hover:text-primary cursor-pointer"
      />
    </header>
  );
};

export default Header;
