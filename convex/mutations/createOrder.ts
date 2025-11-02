import { v } from "convex/values";
import { mutation } from "../_generated/server";

export const createOrder = mutation({
  args: {
    user_id: v.id("customer_details"),
    sub_total: v.number(),
    taxes: v.number(),
    grand_total: v.number(),
    status: v.string(),
  },
  handler: async ({ db }, args) => {
    const order = await db.insert("order", {
      ...args,
      time_stamp: Date.now(),
    });
    return order;
  },
});
