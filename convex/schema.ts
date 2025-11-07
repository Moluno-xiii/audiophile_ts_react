import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  customer_details: defineTable({
    name: v.string(),
    phone: v.string(),
    address: v.string(),
    zipCode: v.number(),
    city: v.string(),
    country: v.string(),
    email: v.string(),
  }),

  payment: defineTable({
    method: v.string(),
    orderId: v.id("order"),
    eMoneyNumber: v.optional(v.number()),
    eMoneyPin: v.optional(v.number()),
    customerId: v.id("customer_details"),
  }),

  order: defineTable({
    customerId: v.id("customer_details"),
    total: v.number(),
    taxes: v.number(),
    status: v.string(),
    timeStamp: v.string(),
  }),

  order_items: defineTable({
    orderId: v.id("order"),
    name: v.string(),
    price: v.number(),
    quantity: v.number(),
    customerId: v.id("customer_details"),
    totalAmount: v.number(),
    imageUrl: v.string(),
  }),
  devices: defineTable({
    category: v.string(),
    isNewProduct: v.boolean(),
    name: v.string(),
    description: v.string(),
    price: v.number(),
    mainImage: v.string(),
    features: v.array(
      v.object({
        id: v.number(),
        text: v.string(),
      }),
    ),
    paragraph: v.string(),
    inTheBox: v.array(
      v.object({
        no: v.number(),
        title: v.string(),
      }),
    ),
    images: v.array(v.object({ id: v.number(), src: v.string() })),
    recommendedDevices: v.array(
      v.object({
        id: v.number(),
        name: v.string(),
        imageSrc: v.string(),
        category: v.string(),
      }),
    ),
  }),
});
