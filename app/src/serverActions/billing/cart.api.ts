import { createServerFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { prisma } from "#/db";
import { auth } from "@/lib/auth";
import { z } from "zod";
import { CartItemSchema } from "#/generated/schemas";

const addToCartSchema = z.object({
  productId: z.string(),
  quantity: z.number().int().min(1).optional(),
  billingPeriod: z.enum(["MONTHLY", "YEARLY"]).optional(),
});

const updateCartItemSchema = z.object({
  itemId: z.string(),
  quantity: z.number().int().min(0),
  billingPeriod: z.enum(["MONTHLY", "YEARLY"]).optional(),
});

const removeFromCartSchema = z.object({
  itemId: z.string(),
});

export const getCart = createServerFn({ method: "GET" }).handler(
  async () => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user) throw new Error("Unauthorized");

    let cart = await prisma.cart.findUnique({
      where: { userId: session.user.id },
      include: { items: { include: { product: true } } },
    });

    if (!cart) {
      cart = await prisma.cart.create({
        data: { userId: session.user.id },
        include: { items: { include: { product: true } } },
      });
    }

    return cart;
  }
);

export const addToCart = createServerFn({ method: "POST" })
  .inputValidator(CartItemSchema)
  .handler(async ({ data }) => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user) throw new Error("Unauthorized");

    let cart = await prisma.cart.findUnique({
      where: { userId: session.user.id },
    });

    if (!cart) {
      cart = await prisma.cart.create({
        data: { userId: session.user.id },
      });
    }

    const existingItem = await prisma.cartItem.findFirst({
      where: {
        cartId: cart.id,
        productId: data.productId,
      },
    });

    if (existingItem) {
      return prisma.cartItem.update({
        where: { id: existingItem.id },
        data: {
          quantity: existingItem.quantity + (data.quantity || 1),
          billingPeriod: data.billingPeriod ?? existingItem.billingPeriod,
        },
        include: { product: true },
      });
    }

    return prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId: data.productId,
        quantity: data.quantity || 1,
        billingPeriod: data.billingPeriod ?? "MONTHLY",
      },
      include: { product: true },
    });
  });

export const updateCartItem = createServerFn({ method: "POST" })
  .inputValidator(updateCartItemSchema)
  .handler(async ({ data }) => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user) throw new Error("Unauthorized");

    if (data.quantity <= 0) {
      return prisma.cartItem.delete({ where: { id: data.itemId } });
    }

    return prisma.cartItem.update({
      where: { id: data.itemId },
      data: {
        quantity: data.quantity,
        billingPeriod: data.billingPeriod ?? undefined,
      },
      include: { product: true },
    });
  });

export const removeFromCart = createServerFn({ method: "POST" })
  .inputValidator(removeFromCartSchema)
  .handler(async ({ data }) => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user) throw new Error("Unauthorized");

    return prisma.cartItem.delete({ where: { id: data.itemId } });
  });

export const clearCart = createServerFn({ method: "POST" }).handler(
  async () => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user) throw new Error("Unauthorized");

    const cart = await prisma.cart.findUnique({
      where: { userId: session.user.id },
    });

    if (!cart) return { success: true, message: "Cart already empty." };

    await prisma.cartItem.deleteMany({ where: { cartId: cart.id } });
    return { success: true, message: "Cart cleared." };
  }
);
