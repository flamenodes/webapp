import { createServerFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { prisma } from "#/db";
import { auth } from "@/lib/auth";
import { z } from "zod";
import type { OrderStatus } from "@/generated/prisma/client";
import { calculateExpiryDate } from "./expiry";

const createOrderSchema = z.object({
  cartId: z.string().optional(),
});

const getOrderSchema = z.object({
  orderId: z.string(),
});

const updateOrderStatusSchema = z.object({
  orderId: z.string(),
  status: z.enum(['PENDING', 'PAYMENT_FAILED', 'PAID', 'PROCESSING', 'DELIVERED', 'CANCELLED', 'REFUNDED']),
});

const cancelOrderSchema = z.object({
  orderId: z.string(),
});

const wrapSuccess = <T>(message: string, data?: T) => ({ success: true, message, data });
const wrapError = (message: string) => ({ success: false, message });

export const createOrder = createServerFn({ method: "POST" })
  .validator(createOrderSchema)
  .handler(async ({ data }) => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user) return wrapError("Unauthorized");

    const cart = await prisma.cart.findFirst({
      where: {
        userId: session.user.id,
        id: data.cartId,
      },
      include: { items: { include: { product: true } } },
    });

    if (!cart || cart.items.length === 0) {
      return wrapError("Cart is empty.");
    }

    const coupon = cart.couponCode
      ? await prisma.coupon.findUnique({ where: { code: cart.couponCode } })
      : null;

    const validCoupon =
      coupon &&
      coupon.active &&
      (!coupon.expiresAt || coupon.expiresAt > new Date());

    const subtotalAmount = cart.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    );

    const discountAmount = validCoupon
      ? coupon.type === 'PERCENT'
        ? Math.floor((subtotalAmount * coupon.amount) / 100)
        : coupon.amount
      : 0;

    const totalAmount = Math.max(subtotalAmount - discountAmount, 0);

    const order = await prisma.order.create({
      data: {
        userId: session.user.id,
        status: 'PENDING',
        subtotalAmount,
        discountAmount,
        totalAmount,
        couponCode: validCoupon ? cart.couponCode : undefined,
        items: {
          create: cart.items.map((item) => ({
            productId: item.productId,
            productName: item.product.planName,
            quantity: item.quantity,
            billingPeriod: item.billingPeriod,
            unitPrice: item.product.price,
            totalPrice: item.product.price * item.quantity,
            specsSnapshot: item.product.specs ?? {},
            expiresAt: calculateExpiryDate(item.billingPeriod),
          })),
        },
      },
      include: { items: { include: { product: true } } },
    });

    await prisma.cartItem.deleteMany({ where: { cartId: cart.id } });

    return wrapSuccess('Order created successfully.', order);
  });

export const getOrders = createServerFn({ method: "GET" }).handler(
  async () => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user) throw new Error("Unauthorized");

    return prisma.order.findMany({
      where: { userId: session.user.id },
      include: {
        items: {
          include: { product: { include: { billingOptions: true } }, server: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  },
);

export const getOrder = createServerFn({ method: "GET" })
  .validator(getOrderSchema)
  .handler(async ({ data }) => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    
    const order = await prisma.order.findFirst({
      where: { id: data.orderId },
      include: {
        items: { include: { product: true } },
        user: { select: { id: true, name: true, email: true } }
      },
    });

    if (!order) throw new Error("Order not found");
    return order;
  });

export const updateOrderStatus = createServerFn({ method: "POST" })
  .validator(updateOrderStatusSchema)
  .handler(async ({ data }) => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user) return wrapError("Unauthorized");

    const order = await prisma.order.findFirst({
      where: { id: data.orderId },
      include: { items: { include: { product: true } } },
    });

    if (!order) return wrapError("Order not found.");

    const updatedOrder = await prisma.order.update({
      where: { id: data.orderId },
      data: { status: data.status  },
    });

    if (data.status === 'PAID') {
      // Send order confirmation email
      const billingDetails = order.deliveryData as any
      const { sendEmailFn } = await import('../queue/deploy-functions')

      await sendEmailFn({
        data: {
          type: 'order-confirmation',
          to: billingDetails?.billingDetails?.email || session.user.email,
          subject: `Order Confirmation - ${order.id}`,
          data: {
            userName: billingDetails?.billingDetails?.firstName || session.user.name,
            orderId: order.id,
            productName: order.items[0]?.productName,
            amount: (order.totalAmount / 100).toFixed(2),
          },
        },
      })

      // Fulfill the order: renewals extend servers, manual ptero links get linked,
      // new purchases get provisioned — all in one place.
      const { fulfillPaidOrder } = await import('./fulfill-order')
      await fulfillPaidOrder(order.id)
    }

    return wrapSuccess('Order status updated successfully.', updatedOrder);
  });

const checkoutSchema = z.object({
  productId: z.string(),
  quantity: z.number().int().positive().default(1),
  billingPeriod: z.enum(['HOURLY', 'DAILY', 'MONTHLY', 'QUARTERLY', 'SEMIANNUALLY', 'YEARLY']).default('MONTHLY'),
  configurationData: z.record(z.string()).optional(),
  billingDetails: z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    phone: z.string(),
    address: z.string(),
    city: z.string(),
    state: z.string(),
    zipCode: z.string(),
    country: z.string(),
  }),
})

const oldCheckoutSchema = z.object({
  productId: z.string(),
  quantity: z.number().int().positive().default(1),
  billingPeriod: z.enum(['MONTHLY', 'QUARTERLY', 'YEARLY']).default('MONTHLY'),
  configuration: z.record(z.string()).optional(),
  billingName: z.string().min(1),
  billingEmail: z.string().email(),
  billingPhone: z.string().optional(),
})

export const createOrderDirect = createServerFn({ method: "POST" })
  .validator(z.any())
  .handler(async ({ data: rawData }) => {
    const data = checkoutSchema.parse(rawData)
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) throw new Error("Unauthorized")

    const product = await prisma.product.findUnique({
      where: { id: data.productId },
      include: { billingOptions: true },
    })
    if (!product) throw new Error("Product not found")

    let unitPrice = product.price
    const billingOption = product.billingOptions?.find(
      (opt) => opt.billingPeriod === data.billingPeriod
    )
    if (billingOption) {
      unitPrice = billingOption.price
    }

    const totalAmount = unitPrice * data.quantity

    const order = await prisma.order.create({
      data: {
        userId: session.user.id,
        status: 'PENDING',
        subtotalAmount: totalAmount,
        discountAmount: 0,
        totalAmount,
        items: {
          create: {
            productId: product.id,
            productName: product.planName,
            quantity: data.quantity,
            billingPeriod: data.billingPeriod,
            unitPrice,
            totalPrice: totalAmount,
            specsSnapshot: product.specs ?? {},
            configuration: data.configurationData ?? undefined,
            expiresAt: calculateExpiryDate(data.billingPeriod),
          },
        },
        deliveryData: {
          billingDetails: data.billingDetails,
        },
      },
      include: { items: true },
    })

    return order
  })

export const checkoutProduct = createServerFn({ method: "POST" })
  .validator(oldCheckoutSchema)
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) return wrapError("Unauthorized")

    const product = await prisma.product.findUnique({ where: { id: data.productId } })
    if (!product) return wrapError("Product not found")

    const unitPrice = product.price
    const totalAmount = unitPrice * data.quantity

    const order = await prisma.order.create({
      data: {
        userId: session.user.id,
        status: 'PENDING',
        subtotalAmount: totalAmount,
        discountAmount: 0,
        totalAmount,
        items: {
          create: {
            productId: product.id,
            productName: product.planName,
            quantity: data.quantity,
            billingPeriod: data.billingPeriod,
            unitPrice,
            totalPrice: totalAmount,
            specsSnapshot: product.specs ?? {},
            configuration: data.configuration ?? undefined,
            expiresAt: calculateExpiryDate(data.billingPeriod),
          },
        },
      },
      include: { items: true, user: true },
    })

    // Create Razorpay order
    let razorpayOrderId: string | null = null
    try {
      const { default: Razorpay } = await import('razorpay')
      const rzp = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID!,
        key_secret: process.env.RAZORPAY_KEY_SECRET!,
      })
      const rzpOrder = await rzp.orders.create({
        amount: totalAmount * 100,
        currency: 'INR',
        receipt: `ord_${order.id.slice(0, 32)}`,
        notes: {
          orderId: order.id,
          userId: session.user.id,
          customerEmail: data.billingEmail,
        },
      })
      razorpayOrderId = rzpOrder.id

      await prisma.order.update({
        where: { id: order.id },
        data: {
          deliveryData: {
            razorpayOrderId: rzpOrder.id,
            razorpayAmount: rzpOrder.amount,
            billingName: data.billingName,
            billingEmail: data.billingEmail,
            billingPhone: data.billingPhone ?? null,
          },
        },
      })
    } catch (e: any) {
      // Razorpay failed — still return the orderId so admin can manually generate link
      console.error('Razorpay order creation failed:', e)
    }

    return wrapSuccess('Order created', {
      orderId: order.id,
      razorpayOrderId,
      totalAmount,
      productName: product.planName,
      billingName: data.billingName,
      billingEmail: data.billingEmail,
    })
  })

export const cancelOrder = createServerFn({ method: "POST" })
  .validator(cancelOrderSchema)
  .handler(async ({ data }) => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user) return wrapError("Unauthorized");

    const order = await prisma.order.findFirst({
      where: { id: data.orderId, userId: session.user.id },
    });

    if (!order) return wrapError("Order not found.");

    const cancelled = await prisma.order.update({
      where: { id: data.orderId },
      data: { status: 'CANCELLED' },
    });

    return wrapSuccess('Order cancelled successfully.', cancelled);
  });
