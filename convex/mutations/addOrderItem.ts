import { v } from "convex/values";
import { mutation } from "../_generated/server";

export const addOrderItem = mutation({
  args: {
    order_id: v.id("order"),
    name: v.string(),
    price: v.number(),
    quantity: v.number(),
    user_id: v.id("customer_details"),
  },
  handler: async ({ db }, args) => {
    await db.insert("order_items", args);
  },
});
