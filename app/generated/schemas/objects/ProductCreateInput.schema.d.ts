import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductCreateInputObjectSchema: z.ZodType<Prisma.ProductCreateInput>;
export declare const ProductCreateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    planName: z.ZodString;
    icon: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    badge: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    category: z.ZodEnum<{
        VPS: "VPS";
        VDS: "VDS";
        WEBHOST: "WEBHOST";
        DISCORD: "DISCORD";
        DDOS_PROT: "DDOS_PROT";
        DEDICATED: "DEDICATED";
        MINECRAFT: "MINECRAFT";
    }>;
    price: z.ZodNumber;
    sortOrder: z.ZodOptional<z.ZodNumber>;
    featureCategory: z.ZodOptional<z.ZodString>;
    inStock: z.ZodOptional<z.ZodBoolean>;
    specs: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        JsonNull: "JsonNull";
    }>, z.ZodType<import("../../helpers/json-helpers").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../helpers/json-helpers").JsonValue, unknown>>]>>;
    deployMode: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    features: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductFeatureCreateNestedManyWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureCreateNestedManyWithoutProductInput, unknown>>>>;
    discount: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.DiscountCreateNestedOneWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountCreateNestedOneWithoutProductInput, unknown>>>>;
    cartItems: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartItemCreateNestedManyWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemCreateNestedManyWithoutProductInput, unknown>>>>;
    orderItems: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderItemCreateNestedManyWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemCreateNestedManyWithoutProductInput, unknown>>>>;
    billingOptions: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionCreateNestedManyWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionCreateNestedManyWithoutProductInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductCreateInput.schema.d.ts.map