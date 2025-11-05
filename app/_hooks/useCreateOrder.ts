import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import useCart from "../_contexts/CartContextProvider";
import toast from "react-hot-toast";
import { useAction, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Params = {
  paymentMethod: "e-money" | "cash-on-delivery";
  handleOpenOverlay: () => void;
  vat: number;
  grandTotal: number;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

const useCreateOrder = ({
  paymentMethod,
  handleOpenOverlay,
  vat,
  grandTotal,
  setIsLoading,
}: Params) => {
  const { cart } = useCart();
  const [formErrors, setFormErrors] = useState({ email: "" });
  const createOrder = useMutation(api.mutations.createOrder.createOrder);
  const sendEmail = useAction(api.actions.sendEmail.default);

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

  return {
    submitForm,
    formErrors,
  };
};

export default useCreateOrder;
