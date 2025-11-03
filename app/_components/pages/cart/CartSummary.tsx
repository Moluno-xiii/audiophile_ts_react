"use client";

import Image from "next/image";
import useCart from "../../../_contexts/CartContextProvider";

type Props = {
  // handleOpenOverlay: () => void;
  triggerSubmit: () => void;
  cartItemsTotalAmount: number;
  shippingCost: number;
  vat: number;
  grandTotal: number;
  isLoading: boolean;
};

const CartSummmary = ({
  // handleOpenOverlay,
  triggerSubmit,
  cartItemsTotalAmount,
  shippingCost,
  vat,
  grandTotal,
  isLoading,
}: Props) => {
  const { cart } = useCart();

  return (
    <section
      className="bg-lighter flex h-fit flex-col gap-y-8 rounded-lg p-8 lg:w-[350px]"
      aria-labelledby="cart summary"
    >
      <h3 className="text-[18px] font-bold uppercase">summary</h3>
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
              <span className="text-darker/50 text-[15px] font-bold">
                x{item.quantity}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <section className="flex flex-col gap-y-2">
        <div className="flex flex-row justify-between">
          <span className="text-darker/50 text-[15px] font-bold uppercase">
            Total{" "}
          </span>
          <span className="text-darker text-[18px] font-bold">
            $ {cartItemsTotalAmount.toLocaleString()}
          </span>
        </div>
        <div className="flex flex-row justify-between">
          <span className="text-darker/50 text-[15px] font-bold uppercase">
            shipping{" "}
          </span>
          <span className="text-darker text-[18px] font-bold">
            $ {shippingCost}
          </span>
        </div>
        <div className="flex flex-row justify-between">
          <span className="text-darker/50 text-[15px] font-bold uppercase">
            VAT (INCLUDED){" "}
          </span>
          <span className="text-darker text-[18px] font-bold">
            $ {vat.toFixed(2)}
          </span>
        </div>
        <div className="mt-4 flex flex-row justify-between">
          <span className="text-darker/50 text-[15px] font-bold uppercase">
            Grand Total{" "}
          </span>
          <span className="text-primary text-[18px] font-bold">
            $ {Number(grandTotal.toFixed(2)).toLocaleString()}
          </span>
        </div>
        <button
          onClick={triggerSubmit}
          disabled={grandTotal < 1 || isLoading}
          className="bg-primary hover:bg-primary-light text-lighter border-none py-2 uppercase disabled:cursor-not-allowed md:py-[15px]"
        >
          {isLoading ? "Processing payment..." : "continue & pay"}
        </button>
      </section>
    </section>
  );
};

export default CartSummmary;
