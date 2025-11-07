import { v } from "convex/values";
import { query } from "../_generated/server";

export const getDevicesByCategory = query({
  args: { category: v.string() },
  handler: async ({ db }, { category }) => {
    const devices = await db
      .query("devices")
      .filter((q) => q.eq(q.field("category"), category))
      .collect();

    return { devices };
  },
});
