import { createServerFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { prisma } from "#/db";
import { auth } from "@/lib/auth";
import { z } from "zod";
import type { OrderStatus } from "@/generated/prisma/client";
import { enqueuePteroDeployment } from "../deploy/queue";

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
  .inputValidator((data) => createOrderSchema.parse(data))
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
      (sum, item) => sum + item.product.monthlyPrice * item.quantity,
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
            productName: item.product.name,
            quantity: item.quantity,
            billingPeriod: item.billingPeriod,
            unitPrice: item.product.monthlyPrice,
            totalPrice: item.product.monthlyPrice * item.quantity,
            specsSnapshot: item.product.specs ?? {},
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
      include: { items: { include: { product: true } } },
      orderBy: { createdAt: "desc" },
    });
  },
);

export const getOrder = createServerFn({ method: "GET" })
  .inputValidator((data) => getOrderSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user) throw new Error("Unauthorized");

    const order = await prisma.order.findFirst({
      where: { id: data.orderId, userId: session.user.id },
      include: { items: { include: { product: true } } },
    });

    if (!order) throw new Error("Order not found");
    return order;
  });

export const updateOrderStatus = createServerFn({ method: "POST" })
  .inputValidator((data) => updateOrderStatusSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user) return wrapError("Unauthorized");

    const order = await prisma.order.findFirst({
      where: { id: data.orderId, userId: session.user.id },
      include: { items: { include: { product: true } } },
    });

    if (!order) return wrapError("Order not found.");

    const updatedOrder = await prisma.order.update({
      where: { id: data.orderId },
      data: { status: data.status as OrderStatus },
    });

    if (data.status === 'PAID') {
      const deployItems = order.items.filter(
        (item) => item.product.deployMode === 'PTERODACTYL',
      );

      await Promise.all(
        deployItems.map(async (item) => {
          const existingServer = await prisma.server.findUnique({
            where: { orderItemId: item.id },
          });

          if (existingServer) return;

          const name = `${item.productName}-${item.id.slice(0, 8)}`;
          const productSpecs = item.product.specs as Record<string, unknown>;

          const server = await prisma.server.create({
            data: {
              orderItemId: item.id,
              userId: session.user.id,
              name,
              type: item.product.category,
              status: 'PROCESSING',
              resources: {
                cpu: Number(productSpecs?.cpu ?? 0),
                memory: Number(productSpecs?.memory ?? 0),
                swap: Number(productSpecs?.swap ?? 0),
                disk: Number(productSpecs?.disk ?? 0),
                database: Number(productSpecs?.database ?? 0),
                allocation: Number(productSpecs?.allocation ?? 1),
                backups: Number(productSpecs?.backups ?? 0),
              },
            },
          });

          const jobData = {
            orderId: order.id,
            orderItemId: item.id,
            serverId: server.id,
            name,
            user: Number(process.env.PTERO_DEFAULT_USER_ID ?? 1),
            nest: Number(productSpecs?.nest ?? process.env.PTERO_DEFAULT_NEST ?? 1),
            egg: Number(productSpecs?.egg ?? process.env.PTERO_DEFAULT_EGG ?? 1),
            specs: {
              cpu: Number(productSpecs?.cpu ?? 0),
              memory: Number(productSpecs?.memory ?? 0),
              swap: Number(productSpecs?.swap ?? 0),
              disk: Number(productSpecs?.disk ?? 0),
              database: Number(productSpecs?.database ?? 0),
              allocation: Number(productSpecs?.allocation ?? 1),
              backups: Number(productSpecs?.backups ?? 0),
            },
            type: item.product.category,
          };

          await enqueuePteroDeployment(jobData);
        }),
      );
    }

    return wrapSuccess('Order status updated successfully.', updatedOrder);
  });

export const cancelOrder = createServerFn({ method: "POST" })
  .inputValidator((data) => cancelOrderSchema.parse(data))
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
