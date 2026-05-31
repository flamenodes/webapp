import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ProductSelectObjectSchema: z.ZodType<Prisma.ProductSelect>;
export declare const ProductSelectObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodBoolean>;
    planName: z.ZodOptional<z.ZodBoolean>;
    icon: z.ZodOptional<z.ZodBoolean>;
    badge: z.ZodOptional<z.ZodBoolean>;
    category: z.ZodOptional<z.ZodBoolean>;
    price: z.ZodOptional<z.ZodBoolean>;
    sortOrder: z.ZodOptional<z.ZodBoolean>;
    features: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.ProductFeatureFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>]>>;
    featureCategory: z.ZodOptional<z.ZodBoolean>;
    inStock: z.ZodOptional<z.ZodBoolean>;
    discountId: z.ZodOptional<z.ZodBoolean>;
    discount: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        select: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.DiscountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.DiscountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
        include: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.DiscountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.DiscountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    }, z.core.$strict>>]>>;
    specs: z.ZodOptional<z.ZodBoolean>;
    deployMode: z.ZodOptional<z.ZodBoolean>;
    cartItems: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.CartItemFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CartItemFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>]>>;
    orderItems: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.OrderItemFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>]>>;
    createdAt: z.ZodOptional<z.ZodBoolean>;
    updatedAt: z.ZodOptional<z.ZodBoolean>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        select: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductCountOutputTypeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductCountOutputTypeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    }, z.core.$strict>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductSelect.schema.d.ts.map