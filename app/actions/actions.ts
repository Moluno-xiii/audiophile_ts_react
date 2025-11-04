"use server";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { fetchQuery } from "convex/nextjs";
import { OrderDetails } from "../types";

const getOrderInfo = async (
  id: string,
): Promise<{ error: string; data: OrderDetails | null }> => {
  "use server";
  try {
    const order = await fetchQuery(
      api.queries.getOrderWithItems.getOrderWithItems,
      {
        orderId: id as Id<"order">,
      },
    );
    return { data: order as unknown as OrderDetails, error: "" };
  } catch (err: unknown) {
    console.log(err);
    if (err instanceof Error) {
      if (err.message.includes("Value does not match validator.")) {
        return {
          data: null,
          error: "Order not found, check the URL and try again!",
        };
      }

      return { data: null, error: err.message };
    }
    return { data: null, error: "An unexpected error  occured, try again" };
  }
};

export { getOrderInfo };
