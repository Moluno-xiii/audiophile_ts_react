import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  customer_details: defineTable({
    name: v.string(),
    phone: v.string(),
    shipping_address: v.string(),
    zip_code: v.string(),
    city: v.string(),
    country: v.string(),
  }),

  payment: defineTable({
    method: v.string(),
    order_id: v.id("order"),
    e_money_number: v.optional(v.string()),
    e_money_pin: v.optional(v.string()),
    user_id: v.id("customer_details"),
  }),

  order: defineTable({
    user_id: v.id("customer_details"),
    sub_total: v.number(),
    taxes: v.number(),
    grand_total: v.number(),
    status: v.string(),
    time_stamp: v.number(),
  }),

  order_items: defineTable({
    order_id: v.id("order"),
    name: v.string(),
    price: v.number(),
    quantity: v.number(),
    user_id: v.id("customer_details"),
  }),
});

// customer_details -> name, phone, shipping_address, zip_code, country
// payment -> method(e-money, cash_on_delivery), order_id, e-money-number, e-money-pin, user_id
// order -> id, user_id, sub_total, taxes, grand_total, (get shipping details from customer table), sttus, time_stamp
// order_items -> id, order_id, name, price, quantity, user_id
