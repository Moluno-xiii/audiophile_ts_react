import { v } from "convex/values";
import { query } from "../_generated/server";

export const getOrderWithItems = query({
  args: { order_id: v.id("order") },
  handler: async ({ db }, { order_id }) => {
    const order = await db.get(order_id);

    if (!order) return null;

    const items = await db
      .query("order_items")
      .filter((q) => q.eq(q.field("order_id"), order_id))
      .collect();
    return { ...order, items };
  },
});
