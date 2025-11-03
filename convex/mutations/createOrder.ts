import { v } from "convex/values";
import { mutation } from "../_generated/server";

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
      // timeStamp: v.string(),
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
  handler: async ({ db }, { customer_info, payment, order, order_items }) => {
    const customerId = await db.insert("customer_details", customer_info);
    console.log("custoemr id from customer_info insert", customerId);
    const orderId = await db.insert("order", {
      ...order,
      customerId,
      timeStamp: new Date().toLocaleString(),
    });
    console.log("order id from order insert", orderId);

    for (const item of order_items) {
      await db.insert("order_items", { ...item, customerId, orderId });
    }

    await db.insert("payment", { ...payment, orderId, customerId });

    // use nodamailer to send email

    return {
      message: "Order placed successfully, check you email",
      orderId,
      customerId,
    };
  },
});

// customer_info : {name, emailAddress, phoneNumber, address, zipCode, city, country}
// payment : {customer_id, payment_method, e-money-pin(if method is e-money), e-money-number, order_id },
// order : {customer_id, status, timestamp, taxes, total }
// order_item : {customer_id, order_id, quantity, total(quantity * price), price, cummulative_amount, name}
