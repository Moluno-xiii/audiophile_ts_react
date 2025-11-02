import { v } from "convex/values";
import { mutation } from "../_generated/server";

export const addCustomer = mutation({
  args: {
    name: v.string(),
    phone: v.string(),
    shipping_address: v.string(),
    zip_code: v.string(),
    city: v.string(),
    country: v.string(),
  },
  handler: async ({ db }, args) => {
    const customer = await db.insert("customer_details", args);
    return customer;
  },
});
