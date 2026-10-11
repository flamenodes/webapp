import { createServerFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { prisma } from "#/db";
import { auth } from "@/lib/auth";
import { z } from "zod";
import type { OrderStatus } from "@/generated/prisma/client";
import { calculateExpiryDate } from "./expiry";
import { suspendServersForOrder } from "./suspend-order-servers";
import { consumeCoupon } from "./coupon.server";
import { evaluateCoupon } from "#/lib/coupon";

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
      ? await prisma.coupon.findUnique({ where: { code: cart.couponCode.toUpperCase() } })
      : null;

    const subtotalAmount = cart.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    );

    const evaluation = evaluateCoupon(coupon, subtotalAmount);
    const applied = evaluation.ok ? evaluation : null;

    const discountAmount = applied?.discountAmount ?? 0;
    const totalAmount = applied?.totalAmount ?? subtotalAmount;

    const order = await prisma.order.create({
      data: {
        userId: session.user.id,
        status: 'PENDING',
        subtotalAmount,
        discountAmount,
        totalAmount,
        couponCode: applied?.code,
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

    // Only count a redemption once an order has actually been written.
    if (applied) await consumeCoupon(applied.code);

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
        renewalForServer: true,
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
    if (!session?.user) throw new Error("Unauthorized");
    
    const order = await prisma.order.findFirst({
      where: { id: data.orderId, userId: session.user.id },
      include: {
        items: { include: { product: true, server: true } },
        user: { select: { id: true, name: true, email: true } },
        renewalForServer: { select: { id: true, name: true, type: true } },
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
  /** Applied at checkout; re-priced here so the browser total is only a preview. */
  couponCode: z.string().trim().nullish(),
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

    const subtotalAmount = unitPrice * data.quantity

    // The coupon the customer typed is priced here, not in the browser: the
    // stored order is what fulfilment and refunds read.
    const requestedCode = data.couponCode?.trim().toUpperCase()
    const coupon = requestedCode
      ? await prisma.coupon.findUnique({ where: { code: requestedCode } })
      : null
    const evaluation = requestedCode ? evaluateCoupon(coupon, subtotalAmount) : null
    if (evaluation && !evaluation.ok) throw new Error(evaluation.message)
    const applied = evaluation?.ok ? evaluation : null

    const totalAmount = applied?.totalAmount ?? subtotalAmount

    const order = await prisma.order.create({
      data: {
        userId: session.user.id,
        status: 'PENDING',
        subtotalAmount,
        discountAmount: applied?.discountAmount ?? 0,
        totalAmount,
        couponCode: applied?.code,
        items: {
          create: {
            productId: product.id,
            productName: product.planName,
            quantity: data.quantity,
            billingPeriod: data.billingPeriod,
            unitPrice,
            totalPrice: subtotalAmount,
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

    if (applied) await consumeCoupon(applied.code)

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

    await prisma.order.update({
      where: { id: order.id },
      data: {
        deliveryData: {
          billingName: data.billingName,
          billingEmail: data.billingEmail,
          billingPhone: data.billingPhone ?? null,
        },
      },
    })
    return { id: order.id, totalAmount, productName: product.planName }
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

    // Cancelling stops + suspends the servers and marks them Expired.
    await suspendServersForOrder(data.orderId);

    const cancelled = await prisma.order.update({
      where: { id: data.orderId },
      data: { status: 'CANCELLED' },
    });

    return wrapSuccess('Order cancelled successfully.', cancelled);
  });
