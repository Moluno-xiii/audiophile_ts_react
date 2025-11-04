"use client";

import { useRef, useState } from "react";
import GoBack from "../../ui/reusables/GoBack";
import CartSummmary from "../cart/CartSummary";
import CheckoutForm from "./CheckoutForm";
import CheckoutConfirmationModal from "./CheckoutConfirmationModal";
import useCart from "@/app/_contexts/CartContextProvider";

const CheckoutPage: React.FC = () => {
  const { cart, removeAllCartItems } = useCart();
  const [
    isCheckoutConfirmationOverLayOpen,
    setIsCheckoutConfirmationOverLayOpen,
  ] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const triggerSubmit = () => {
    formRef.current?.requestSubmit();
  };

  const onCloseCheckoutConfirmationOverlay = () => {
    setIsCheckoutConfirmationOverLayOpen(false);
    removeAllCartItems();
  };

  const cartItemsTotalAmount = cart
    .slice()
    .reduce((acc, cur) => (acc += cur.price * cur.quantity), 0);
  const shippingCost = cartItemsTotalAmount > 0 ? 20 : 0;
  const vat = (6.2 / 100) * cartItemsTotalAmount;
  const grandTotal = cartItemsTotalAmount + vat + shippingCost;

  return (
    <div className="bg-light pb-[140px]">
      <section className="mx-auto max-w-[1110px] px-6">
        <GoBack />
        <div className="flex flex-col justify-between gap-x-10 gap-y-8 lg:flex-row">
          <section className="bg-lighter flex flex-1 flex-col rounded-lg p-6 md:gap-y-10 lg:px-10 lg:py-14">
            <h2 className="text-[32px] font-bold uppercase">checkout</h2>
            <CheckoutForm
              handleOpenOverlay={() =>
                setIsCheckoutConfirmationOverLayOpen(true)
              }
              ref={formRef}
              cartItemsTotalAmount={cartItemsTotalAmount}
              grandTotal={grandTotal}
              vat={vat}
              setIsLoading={setIsLoading}
            />
          </section>
          <CartSummmary
            triggerSubmit={triggerSubmit}
            cartItemsTotalAmount={cartItemsTotalAmount}
            grandTotal={grandTotal}
            shippingCost={shippingCost}
            vat={vat}
            isLoading={isLoading}
          />
        </div>
      </section>
      {isCheckoutConfirmationOverLayOpen && (
        <CheckoutConfirmationModal
          onClose={onCloseCheckoutConfirmationOverlay}
          grandTotal={grandTotal}
        />
      )}
    </div>
  );
};

export default CheckoutPage;
