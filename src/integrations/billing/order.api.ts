import { createServerFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { prisma } from "#/db";
import { auth } from "@/lib/auth";
import { z } from "zod";
import type { Prisma, OrderStatus } from "@/generated/prisma/client";

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

export const createOrder = createServerFn({ method: "POST" })
  .inputValidator((data) => createOrderSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user) throw new Error("Unauthorized");

    const cart = await prisma.cart.findUnique({
      where: { id: data.cartId || undefined, userId: session.user.id },
      include: { items: { include: { product: true } } },
    });

    if (!cart || cart.items.length === 0) throw new Error("Cart is empty");

    const totalAmount = cart.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );

    const order = await prisma.order.create({
      data: {
        userId: session.user.id,
        totalAmount,
        status: "PENDING",
        items: {
          create: cart.items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.product.price,
          })),
        },
      },
      include: { items: { include: { product: true } } },
    });

    await prisma.cartItem.deleteMany({ where: { cartId: cart.id } });

    return order;
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
  }
);

export const getOrder = createServerFn({ method: "GET" })
  .inputValidator((data) => getOrderSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user) throw new Error("Unauthorized");

    const order = await prisma.order.findUnique({
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
    if (!session?.user) throw new Error("Unauthorized");

    return prisma.order.update({
      where: { id: data.orderId, userId: session.user.id },
      data: { status: data.status as OrderStatus },
    });
  });

export const cancelOrder = createServerFn({ method: "POST" })
  .inputValidator((data) => cancelOrderSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user) throw new Error("Unauthorized");

    return prisma.order.update({
      where: { id: data.orderId, userId: session.user.id },
      data: { status: "CANCELLED" },
    });
  });
