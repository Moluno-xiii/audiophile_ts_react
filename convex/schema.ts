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
});

// customer_details -> name, phone, shipping_address, zip_code, country
// payment -> method(e-money, cash_on_delivery), order_id, e-money-number, e-money-pin, user_id
// order -> id, user_id, sub_total, taxes, grand_total, (get shipping details from customer table), sttus, time_stamp
// order_items -> id, order_id, name, price, quantity, user_id
