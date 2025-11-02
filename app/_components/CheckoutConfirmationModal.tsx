"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

type Props = {
  onClose: () => void;
};

const CheckoutConfirmationModal: React.FC<Props> = ({ onClose }) => {
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

  const cart = [
    {
      name: "xx99 mk ii",
      amount: 1,
      price: 2999,
      imageSrc: "/xx99-headphone.png",
    },
    {
      name: "xx59",
      amount: 2,
      price: 899,
      imageSrc: "/xx59-headphone.png",
    },
    {
      name: "yx1",
      amount: 1,
      price: 599,
      imageSrc: "/yxi-earphone.png",
    },
  ];

  const cartTotal = 5446;
  return (
    <div
      onClick={onClose}
      className="bg-darker/40 fixed top-[90px] right-0 bottom-0 left-0 p-6 md:top-[94px]"
    >
      <section
        className="bg-lighter right-6 flex flex-col rounded-lg p-8 md:right-10 md:mx-auto md:w-[540px] md:min-w-[377px] lg:absolute lg:right-[165px]"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <div className="bg-primary flex size-8 items-center justify-center rounded-full">
          <Image height={15.8} width={22.55} alt="tick icon" src="/tick.png" />
        </div>
        <p className="text-darker mt-6 mb-4 text-2xl font-bold uppercase">
          thank you for your order
        </p>
        <span className="text-darker/50 text-[15px]">
          You will receive an email confirmation shortly.
        </span>

        <div className="my-6 flex flex-col rounded-lg pt-6 md:flex-row lg:flex-col">
          <div className="flex flex-1 flex-row gap-x-7 border-b border-b-black/[8%] px-6 pb-5">
            <Image
              height={32}
              width={28}
              src={cart[0].imageSrc}
              alt="item image"
            />
            <div className="flex flex-1 flex-row justify-between">
              <div className="flex flex-col gap-y-2">
                <p className="text-[15px] font-bold uppercase">
                  {cart[0].name}
                </p>
                <p className="text-sm font-bold text-black/50">
                  $ {cart[0].price.toLocaleString()}
                </p>
              </div>
              <span className="text-sm font-bold text-black/50">
                x{cart[0].amount}
              </span>
            </div>
          </div>
          <footer className="bg-darker flex flex-1 flex-col gap-y-2 rounded-b-lg px-6 py-4 md:rounded-t-lg">
            <span className="text-lighter/50 text-[15px] uppercase">
              grand total
            </span>
            <p className="text-lighter text-[18px] font-bold">
              $ {cartTotal.toLocaleString()}
            </p>
          </footer>
        </div>
        <Link
          href="/"
          className="bg-primary hover:bg-primary-light w-full cursor-pointer py-2 text-center text-white uppercase md:py-4"
        >
          back to home
        </Link>
      </section>
    </div>
  );
};

export default CheckoutConfirmationModal;
