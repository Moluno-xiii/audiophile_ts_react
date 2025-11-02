import { v } from "convex/values";
import { mutation } from "../_generated/server";

export const addPayment = mutation({
  args: {
    method: v.string(),
    order_id: v.id("order"),
    e_money_number: v.optional(v.string()),
    e_money_pin: v.optional(v.string()),
    user_id: v.id("customer_details"),
  },
  handler: async ({ db }, args) => {
    await db.insert("payment", args);
  },
});
