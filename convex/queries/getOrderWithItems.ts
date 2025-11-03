import { v } from "convex/values";
import { query } from "../_generated/server";

export const getOrderWithItems = query({
  args: { orderId: v.id("order") },
  handler: async ({ db }, { orderId }) => {
    const order = await db.get(orderId);

    if (!order) return null;

    const items = await db
      .query("order_items")
      .filter((q) => q.eq(q.field("orderId"), orderId))
      .collect();
    const userDetails = await db
      .query("customer_details")
      .filter((q) => q.eq(q.field("_id"), order.customerId))
      .collect();
    return { ...order, items, user: userDetails[0] };
  },
});
