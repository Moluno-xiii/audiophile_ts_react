import { v } from "convex/values";
import { query } from "../_generated/server";

export const getDeviceByName = query({
  args: {
    name: v.string(),
  },
  handler: async ({ db }, { name }) => {
    const device = await db
      .query("devices")
      .filter((q) => q.eq(q.field("name"), name))
      .collect();

    return {
      device,
    };
  },
});
