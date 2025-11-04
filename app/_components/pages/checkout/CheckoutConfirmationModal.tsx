"use client";
import useCart from "@/app/_contexts/CartContextProvider";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  grandTotal: number;
  onClose: () => void;
};

const CheckoutConfirmationModal: React.FC<Props> = ({
  onClose,
  grandTotal,
}) => {
  const [showAllItems, setShowAllItems] = useState(false);

  const toggleShowItems = () => {
    setShowAllItems((cur) => (cur === true ? false : true));
  };
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

  const { cart } = useCart();

  return (
    <div
      onClick={onClose}
      className="bg-darker/40 fixed top-[90px] right-0 bottom-0 left-0 p-6 md:top-[94px]"
    >
      <section
        className="bg-lighter right-6 flex flex-col rounded-lg p-8 md:right-10 md:mx-auto md:w-[540px]"
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

        <div className="my-6 flex flex-col rounded-lg pt-6 md:flex-row">
          <ul className="bg-light flex flex-1 flex-col gap-y-4 p-2 px-6 pb-5 max-md:rounded-t-lg md:rounded-tl-lg md:rounded-bl-lg md:p-6">
            {cart.map((item, index) => (
              <li
                key={item.name}
                className={`flex flex-row gap-x-7 ${index !== 0 && !showAllItems && "hidden"}`}
              >
                <Image
                  height={32}
                  width={28}
                  src={item.imageUrl}
                  alt="item image"
                />
                <div className="flex flex-1 flex-row justify-between">
                  <div className="flex flex-col gap-y-2">
                    <p className="text-[15px] font-bold uppercase">
                      {item.name}
                    </p>
                    <p className="text-sm font-bold text-black/50">
                      $ {item.price.toLocaleString()}
                    </p>
                  </div>
                  <span className="text-sm font-bold text-black/50">
                    x{item.quantity}
                  </span>
                </div>
              </li>
            ))}
            {cart.length > 1 && (
              <p
                onClick={toggleShowItems}
                className="text-darker/50 border-t-darker/[8%] hover:text-primary cursor-pointer border-t pt-4 text-center transition-all duration-200"
              >
                {showAllItems ? "Show less" : `And ${cart.length - 1} items`}
              </p>
            )}
          </ul>
          <footer className="bg-darker flex flex-1 flex-col justify-center gap-y-2 px-6 py-4 max-md:rounded-b-lg md:rounded-tr-lg md:rounded-br-lg">
            <span className="text-lighter/50 text-[15px] uppercase">
              grand total
            </span>
            <p className="text-lighter text-[18px] font-bold">
              $ {grandTotal.toLocaleString()}
            </p>
          </footer>
        </div>
        <Link
          onClick={onClose}
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
