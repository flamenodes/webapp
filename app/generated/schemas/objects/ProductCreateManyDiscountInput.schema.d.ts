import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductCreateManyDiscountInputObjectSchema: z.ZodType<Prisma.ProductCreateManyDiscountInput>;
export declare const ProductCreateManyDiscountInputObjectZodSchema: z.ZodObject<{
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
    updatedAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductCreateManyDiscountInput.schema.d.ts.map