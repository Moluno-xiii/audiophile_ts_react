import { fetchQuery } from "convex/nextjs";
import { OrderDetails } from "./types";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

const getOrderInfo = async (
  id: string,
): Promise<{ error: string; data: OrderDetails | null }> => {
  "use server";
  try {
    console.log("i was called");
    const order = await fetchQuery(
      api.queries.getOrderWithItems.getOrderWithItems,
      {
        orderId: id as Id<"order">,
      },
    );
    console.log("order from getorderinfo", order);
    return { data: order as unknown as OrderDetails, error: "" };
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err.message);
      console.log("err name", err.name);
      console.log(
        "err Path",
        err.message.includes("ArgumentValidationError:") ? "true" : "false",
      );
      if (err.message.includes("Value does not match validator.")) {
        return {
          data: null,
          error: "Order not found, check the URL and try again!",
        };
      }

      return { data: null, error: err.message };
    }
    // if (err instanceof Argumentval)
    return { data: null, error: "An unexpected error  occured, try again" };
  }
};

export { getOrderInfo };
