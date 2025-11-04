"use node";

import nodemailer from "nodemailer";
import { action } from "../_generated/server";
import { v } from "convex/values";

export default action({
  args: {
    email: v.string(),
    orderId: v.string(),
    customer_info: v.object({
      name: v.string(),
      address: v.string(),
      city: v.string(),
      country: v.string(),
      phone: v.string(),
      zipCode: v.number(),
    }),
    order_items: v.array(
      v.object({
        name: v.string(),
        quantity: v.number(),
        totalAmount: v.number(),
        imageUrl: v.string(),
        price: v.number(),
      }),
    ),
  },
  handler: async (_, { email, orderId, customer_info, order_items }) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "molunoprogress@gmail.com",
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });

    try {
      const isVerified = await transporter.verify();
    } catch (error) {
      throw error;
    }

    const info = await transporter.sendMail({
      from: `"Audiophile" <molunoprogress@gmail.com>`,
      to: email,
      subject: "Order Summary",
      html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
    <h2 style="color: #00712D;">Good day, ${customer_info.name}!</h2>

    <p style="font-size: 16px; color: #333;">
      Your order <strong>#${orderId}</strong> has been successfully placed. 
      Below is a summary of your order:
    </p>

    <div style="margin-top: 20px;">
      <h3 style="color: #00712D;">Order Summary</h3>
      <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
        <thead>
          <tr>
            <th align="left" style="border-bottom: 1px solid #ddd; padding: 8px;">Item</th>
            <th align="center" style="border-bottom: 1px solid #ddd; padding: 8px;">Qty</th>
            <th align="right" style="border-bottom: 1px solid #ddd; padding: 8px;">Price</th>
          </tr>
        </thead>
        <tbody>
          ${order_items
            .map(
              (item) => `
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${item.name}</td>
              <td align="center" style="padding: 8px; border-bottom: 1px solid #eee;">${item.quantity}</td>
              <td align="right" style="padding: 8px; border-bottom: 1px solid #eee;">₦${item.totalAmount.toFixed(2)}</td>
            </tr>`,
            )
            .join("")}
        </tbody>
      </table>
    </div>

    <div style="margin-top: 20px;">
      <h3 style="color: #00712D;">Shipping Details</h3>
      <p style="font-size: 15px; color: #444;">
        <strong>Name:</strong> ${customer_info.name}<br/>
        <strong>Address:</strong> ${customer_info.address}, ${customer_info.city}<br/>
        <strong>Zip Code:</strong> ${customer_info.zipCode}<br/>
        <strong>Country:</strong> ${customer_info.country}<br/>
        <strong>Phone:</strong> ${customer_info.phone}
      </p>
    </div>

    <div style="margin-top: 30px; text-align: center;">
      <a href="https://audiophile-ts-react.vercel.app/orders/${orderId}"
         style="display: inline-block; padding: 12px 24px; background-color: #00712D; color: #fff;
                text-decoration: none; border-radius: 6px; font-weight: bold;">
        View Your Order
      </a>
    </div>

    <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />

    <div style="text-align: center; color: #777; font-size: 14px;">
      <p>If you have any questions, contact our support team:</p>
      <p><a href="mailto:molunoprogress@gmail.com" style="color: #00712D; text-decoration: none;">
        audiophile support
      </a></p>
      <p>Thank you for shopping with <strong>Audiophile</strong>!</p>
    </div>
  </div>
`,
    });

    return { success: true };
  },
});
