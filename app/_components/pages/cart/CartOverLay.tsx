"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import useCart from "../../../_contexts/CartContextProvider";

type Props = {
  onClose: () => void;
};

const CartOverLay: React.FC<Props> = ({ onClose }) => {
  const {
    cart,
    incrementItemQuantity,
    decrementItemQuantity,
    removeAllCartItems,
    removeCartItem,
  } = useCart();

  const totalAmount = cart
    .slice()
    .reduce((acc, cur) => (acc += cur.price * cur.quantity), 0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="bg-darker/40 fixed top-[90px] right-0 bottom-0 left-0 z-50 p-6 md:top-[94px]"
    >
      <section
        className="bg-lighter right-6 z-50 flex flex-col gap-y-8 rounded-lg px-7 py-8 md:absolute md:right-10 md:min-w-[377px] lg:right-[165px]"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        {/* <IoMdClose onClick={onClose} color="black" /> */}
        <header className="flex flex-row items-center justify-between">
          <p className="text-[18px] font-bold uppercase">
            Cart ({cart.length})
          </p>
          <span
            onClick={removeAllCartItems}
            className="text-dark/50 hover:text-primary cursor-pointer transition-all duration-200"
          >
            Remove all
          </span>
        </header>
        <ul className="flex flex-col gap-y-6">
          {cart.map((item) => (
            <li key={item.name} className="flex flex-row gap-x-4">
              <div className="bg-light rounded-lg p-3">
                <Image
                  src={item.imageUrl}
                  alt={`Image of ${item.name}`}
                  height={40}
                  width={36.1}
                />
              </div>
              <div className="flex flex-1 flex-row items-center justify-between">
                <div className="flex flex-col">
                  <p className="text-darker text-[15px] font-bold uppercase">
                    {item.name}
                  </p>
                  <p className="text-darker/50 text-[16px]">
                    $ {item.price.toLocaleString()}
                  </p>
                </div>
                <button className="bg-light text-darker flex flex-row items-center gap-x-5 px-[15.5px] py-2 text-[13px] font-bold md:py-[15px]">
                  <HiOutlineMinusSmall
                    height={18}
                    width={16}
                    color="black"
                    className="hover:text-primary cursor-pointer transition-all duration-200"
                    onClick={
                      item.quantity > 1
                        ? () => decrementItemQuantity(item.id)
                        : () => removeCartItem(item.id)
                    }
                  />
                  <span>{item.quantity}</span>
                  <GoPlus
                    height={18}
                    width={16}
                    color="black"
                    className="hover:text-primary cursor-pointer transition-all duration-200"
                    onClick={() => incrementItemQuantity(item.id)}
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <footer className="flex flex-row items-center justify-between">
          <span className="text-darker/50 text-[16px] uppercase">total</span>
          <span className="text-darker text-[16px] font-bold">
            $ {totalAmount.toLocaleString()}
          </span>
        </footer>
        <Link
          onClick={onClose}
          href="/checkout"
          className="bg-primary hover:bg-primary-light w-full cursor-pointer py-2 text-center text-white uppercase md:py-4"
        >
          checkout
        </Link>
      </section>
    </div>
  );
};

export default CartOverLay;
