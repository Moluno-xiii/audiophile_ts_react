"use client";

import { useState } from "react";
import Button from "../_components/ui/reusables/Button";
import GoBack from "../_components/ui/reusables/GoBack";
import CheckoutConfirmationModal from "../_components/CheckoutConfirmationModal";
import Input from "../_components/ui/Input";
import Image from "next/image";
import { cart } from "../data";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinusSmall } from "react-icons/hi2";

const page: React.FC = () => {
  const [
    isCheckoutConfirmationOverLayOpen,
    setIsCheckoutConfirmationOverLayOpen,
  ] = useState(false);
  return (
    <div className="bg-light pb-[140px]">
      <section className="mx-auto max-w-[1110px] px-6">
        <GoBack />
        <div className="flex flex-col justify-between gap-x-10 gap-y-8 lg:flex-row">
          <section className="bg-lighter flex flex-1 flex-col rounded-lg p-6 lg:gap-y-10 lg:px-10 lg:py-14">
            <h2 className="text-[32px] font-bold uppercase">checkout</h2>
            <CheckoutForm />
          </section>
          <CartSummmary
            handleOpenOverlay={() => setIsCheckoutConfirmationOverLayOpen(true)}
          />
        </div>
      </section>
      {isCheckoutConfirmationOverLayOpen && (
        <CheckoutConfirmationModal
          onClose={() => setIsCheckoutConfirmationOverLayOpen(false)}
        />
      )}
    </div>
  );
};

export default page;

const CheckoutForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("e-money");
  return (
    <form action="" className="flex flex-col gap-y-8 lg:gap-y-14">
      <section aria-labelledby="billing details form section">
        <h3 className="text-primary mb-4 text-[13px] font-bold uppercase">
          billing details
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input name="name" label="name" type="text" />
          <Input name="email" label="email address" type="text" />
          <Input name="phone" label="phone number" type="number" />
        </div>
      </section>

      <section aria-labelledby="shipping info form section">
        <h3 className="text-primary mb-4 text-[13px] font-bold uppercase">
          shipping info
        </h3>
        <Input name="address" label="address" type="text" />
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input name="zipCode" label="zip code" type="number" />
          <Input name="city" label="city" type="text" />
          <Input name="country" label="country" type="text" />
        </div>
      </section>

      <section aria-labelledby="payment details form section">
        <h3 className="text-primary mb-4 text-[13px] font-bold uppercase">
          payent details
        </h3>
        <div className="flex flex-col justify-between gap-x-2 md:flex-row">
          <p className="text-darker flex-1 text-[18px] font-bold">
            Payment Method
          </p>
          <div className="flex flex-1 flex-col gap-y-2">
            <Input
              variant="option"
              onChange={(e) => setPaymentMethod(e.target.value)}
              value="e-money"
              label="e-money"
              name="paymentMethod"
              checked={paymentMethod === "e-money"}
            />
            <Input
              onChange={(e) => setPaymentMethod(e.target.value)}
              variant="option"
              value="cash-on-delivery"
              label="Cash on Delivery"
              name="paymentMethod"
              checked={paymentMethod === "cash-on-delivery"}
            />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input name="e-money-number" label="e-Money Number" type="number" />
          <Input name="e-money-pin" label="e-Money PIN" type="number" />
        </div>
      </section>
    </form>
  );
};

const CartSummmary = ({
  handleOpenOverlay,
}: {
  handleOpenOverlay: () => void;
}) => {
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
                src={item.imageSrc}
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
                x{item.amount}
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
          <span className="text-darker text-[18px] font-bold">$ 5,396</span>
        </div>
        <div className="flex flex-row justify-between">
          <span className="text-darker/50 text-[15px] font-bold uppercase">
            shipping{" "}
          </span>
          <span className="text-darker text-[18px] font-bold">$ 50</span>
        </div>
        <div className="flex flex-row justify-between">
          <span className="text-darker/50 text-[15px] font-bold uppercase">
            VAT (INCLUDED){" "}
          </span>
          <span className="text-darker text-[18px] font-bold">$ 5,396</span>
        </div>
        <div className="mt-4 flex flex-row justify-between">
          <span className="text-darker/50 text-[15px] font-bold uppercase">
            Grand Total{" "}
          </span>
          <span className="text-primary text-[18px] font-bold">$ 5,446</span>
        </div>
        <button
          onClick={handleOpenOverlay}
          className="bg-primary hover:bg-primary-light text-lighter border-none py-2 uppercase md:py-[15px]"
        >
          continue & pay
        </button>
      </section>
    </section>
  );
};
