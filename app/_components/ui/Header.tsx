"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import LinkComponent from "./LinkComponent";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import CartOverLay from "../pages/cart/CartOverLay";

const Header: React.FC = () => {
  const [isCartOverLayOpen, setIsCartOverLayOpen] = useState(false);
  return (
    <header className="border-b-lighter/20 bg-darker sticky top-0 flex flex-row items-center justify-between border-b px-6 pt-8 pb-8 md:pb-9">
      <div className="flex flex-row gap-x-11">
        <MdMenu size={24} className="block lg:hidden" color="white" />
        <Link href="/">
          <Image
            height={25}
            width={143}
            alt="Audiophile logo"
            src={"/audiophile.svg"}
          />
        </Link>
      </div>
      <div className="hidden lg:block">
        <LinkComponent />
      </div>
      <AiOutlineShoppingCart
        onClick={() => setIsCartOverLayOpen(true)}
        height={20}
        width={23.33}
        color="white"
        className="hover:text-primary cursor-pointer"
      />
      {isCartOverLayOpen && (
        <CartOverLay onClose={() => setIsCartOverLayOpen(false)} />
      )}
    </header>
  );
};

export default Header;
