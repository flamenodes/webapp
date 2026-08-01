import { createServerFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { prisma } from "#/db";
import { auth } from "@/lib/auth";
import { z } from "zod";

const createCouponSchema = z.object({
  code: z.string(),
  type: z.enum(['FIXED', 'PERCENT']),
  amount: z.number().int(),
  description: z.string().optional().nullable(),
  active: z.boolean().default(true),
});

const updateCouponSchema = z.object({
  id: z.string(),
  code: z.string().optional(),
  type: z.enum(['FIXED', 'PERCENT']).optional(),
  amount: z.number().int().optional(),
  description: z.string().optional().nullable(),
  active: z.boolean().optional(),
});

const getCouponSchema = z.object({
  id: z.string(),
});

const validateCouponSchema = z.object({
  code: z.string(),
});

const deleteCouponSchema = z.object({
  id: z.string(),
});

export const createCoupon = createServerFn({ method: 'POST' })
  .validator(createCouponSchema)
  .handler(async ({ data }) => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user) throw new Error('Unauthorized');

    return prisma.coupon.create({ data });
  });

export const getCoupons = createServerFn({ method: 'GET' }).handler(async () => {
  const headers = getRequestHeaders();
  const session = await auth.api.getSession({ headers });
  if (!session?.user) throw new Error('Unauthorized');

  return prisma.coupon.findMany({ orderBy: { createdAt: 'desc' } });
});

export const getCoupon = createServerFn({ method: 'GET' })
  .validator(getCouponSchema)
  .handler(async ({ data }) => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user) throw new Error('Unauthorized');

    const coupon = await prisma.coupon.findUnique({ where: { id: data.id } });
    if (!coupon) throw new Error('Coupon not found');
    return coupon;
  });

export const validateCoupon = createServerFn({ method: 'POST' })
  .validator(validateCouponSchema)
  .handler(async ({ data }) => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user) throw new Error('Unauthorized');

    const coupon = await prisma.coupon.findUnique({ 
      where: { code: data.code } 
    });

    if (!coupon) throw new Error('Invalid coupon code');
    if (!coupon.active) throw new Error('Coupon is not active');

    return coupon;
  });

export const updateCoupon = createServerFn({ method: 'POST' })
  .validator(updateCouponSchema)
  .handler(async ({ data }) => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user) throw new Error('Unauthorized');

    const { id, ...updateData } = data;
    return prisma.coupon.update({
      where: { id },
      data: updateData,
    });
  });

export const deleteCoupon = createServerFn({ method: 'POST' })
  .validator(deleteCouponSchema)
  .handler(async ({ data }) => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user) throw new Error('Unauthorized');

    return prisma.coupon.delete({ where: { id: data.id } });
  });
