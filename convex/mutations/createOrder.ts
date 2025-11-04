import { v } from "convex/values";
import { mutation } from "../_generated/server";
import { internal } from "../_generated/api";

export const createOrder = mutation({
  args: {
    customer_info: v.object({
      name: v.string(),
      email: v.string(),
      phone: v.string(),
      address: v.string(),
      zipCode: v.number(),
      city: v.string(),
      country: v.string(),
    }),
    payment: v.object({
      method: v.string(),
      eMoneyNumber: v.optional(v.number()),
      eMoneyPin: v.optional(v.number()),
    }),
    order: v.object({
      status: v.string(),
      taxes: v.number(),
      total: v.number(),
    }),
    order_items: v.array(
      v.object({
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
        totalAmount: v.number(),
        imageUrl: v.string(),
      }),
    ),
  },
  handler: async (ctx, { customer_info, payment, order, order_items }) => {
    const customerId = await ctx.db.insert("customer_details", customer_info);
    const orderId = await ctx.db.insert("order", {
      ...order,
      customerId,
      timeStamp: new Date().toLocaleString(),
    });

    for (const item of order_items) {
      await ctx.db.insert("order_items", { ...item, customerId, orderId });
    }

    await ctx.db.insert("payment", { ...payment, orderId, customerId });

    return {
      message: "Order placed successfully, check you email",
      orderId,
      customerId,
    };
  },
});
