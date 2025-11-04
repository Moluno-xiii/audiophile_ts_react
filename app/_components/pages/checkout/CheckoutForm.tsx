"use client";

import {
  Dispatch,
  FormEvent,
  forwardRef,
  SetStateAction,
  useState,
} from "react";
import Input from "../../ui/Input";
import toast from "react-hot-toast";
import { useAction, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import useCart from "@/app/_contexts/CartContextProvider";

type FormProps = {
  handleOpenOverlay: () => void;
  cartItemsTotalAmount: number;
  vat: number;
  grandTotal: number;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CheckoutForm = forwardRef<HTMLFormElement, FormProps>(
  ({ handleOpenOverlay, vat, grandTotal, setIsLoading }, ref) => {
    const [paymentMethod, setPaymentMethod] = useState<
      "e-money" | "cash-on-delivery"
    >("e-money");
    const [formErrors, setFormErrors] = useState({ email: "" });
    const createOrder = useMutation(api.mutations.createOrder.createOrder);
    const sendEmail = useAction(api.actions.sendEmail.default);

    const { cart } = useCart();

    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      const finalData = {
        ...data,
        zipCode: Number(data.zipCode),
        eMoneyPin: data.eMoneyPin ? Number(data.eMoneyPin) : undefined,
        eMoneyNumber: data.eMoneyNumber ? Number(data.eMoneyNumber) : undefined,
        method: paymentMethod,
      } as unknown as {
        email: string;
        address: string;
        city: string;
        country: string;
        name: string;
        phone: string;
        zipCode: number;
        eMoneyPin?: number;
        eMoneyNumber?: number;
        method: "e-money" | "cash-on-delivery";
      };
      if (!emailRegex.test(data.email as string)) {
        setFormErrors({ email: "Invalid email address" });
        toast.error("Invalid email address");
        return;
      }

      const totalItems: {
        name: string;
        price: number;
        quantity: number;
        totalAmount: number;
        imageUrl: string;
      }[] = [];
      cart.forEach((item) => {
        totalItems.push({
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          totalAmount: item.price * item.quantity,
          imageUrl: item.imageUrl,
        });
      });

      try {
        setFormErrors({ email: "" });
        const {
          eMoneyNumber,
          eMoneyPin,
          method,
          address,
          city,
          country,
          email,
          name,
          phone,
          zipCode,
        } = finalData;
        setIsLoading(true);
        const req = await createOrder({
          payment: {
            eMoneyNumber,
            eMoneyPin,
            method,
          },
          customer_info: {
            address,
            city,
            country,
            email,
            name,
            phone,
            zipCode,
          },
          order: {
            status: "in transit",
            taxes: vat,
            total: grandTotal,
          },
          order_items: totalItems,
        });
        await sendEmail({
          email,
          orderId: req.orderId,
          order_items: totalItems,
          customer_info: { address, city, country, name, phone, zipCode },
        });
        form.reset();
        toast.success("Order placed succesfully");
        handleOpenOverlay();
      } catch (error: unknown) {
        toast.error(
          error instanceof Error
            ? error.message
            : "An unexpected error occured, try again later.",
        );
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <form
        onSubmit={submitForm}
        className="flex flex-col gap-y-8 lg:gap-y-14"
        id="checkout-form"
        ref={ref}
      >
        <section aria-labelledby="billing details form section">
          <h3 className="text-primary mb-4 text-[13px] font-bold uppercase">
            Billing Details
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input name="name" label="Name" type="text" required />
            <Input
              name="email"
              label="Email Address"
              type="text"
              required
              error={formErrors.email}
            />
            <Input name="phone" label="Phone Number" type="tel" required />
          </div>
        </section>

        <section aria-labelledby="shipping info form section">
          <h3 className="text-primary mb-4 text-[13px] font-bold uppercase">
            Shipping Info
          </h3>
          <Input name="address" label="Address" type="text" required />
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input name="zipCode" label="ZIP Code" type="number" required />
            <Input name="city" label="City" type="text" required />
            <Input name="country" label="Country" type="text" required />
          </div>
        </section>

        <section aria-labelledby="payment details form section">
          <h3 className="text-primary mb-4 text-[13px] font-bold uppercase">
            Payment Details
          </h3>
          <div className="flex flex-col justify-between gap-x-2 gap-y-3 md:flex-row">
            <p className="text-darker flex-1 text-[18px] font-bold">
              Payment Method
            </p>
            <div className="flex flex-1 flex-col gap-y-2">
              <Input
                variant="option"
                onChange={(e) => setPaymentMethod(e.target.value as "e-money")}
                value="e-money"
                label="e-money"
                name="paymentMethod"
                checked={paymentMethod === "e-money"}
                required
              />
              <Input
                onChange={(e) =>
                  setPaymentMethod(e.target.value as "cash-on-delivery")
                }
                variant="option"
                value="cash-on-delivery"
                label="Cash on Delivery"
                name="paymentMethod"
                checked={paymentMethod === "cash-on-delivery"}
                required
              />
            </div>
          </div>

          {paymentMethod === "e-money" && (
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <Input
                name="eMoneyNumber"
                label="e-Money Number"
                type="number"
                required={paymentMethod === "e-money"}
              />
              <Input
                name="eMoneyPin"
                label="e-Money PIN"
                type="number"
                required={paymentMethod === "e-money"}
              />
            </div>
          )}
        </section>
      </form>
    );
  },
);
CheckoutForm.displayName = "CheckoutForm";
export default CheckoutForm;
