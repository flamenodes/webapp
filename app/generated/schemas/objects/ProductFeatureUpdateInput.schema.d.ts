import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductFeatureUpdateInputObjectSchema: z.ZodType<Prisma.ProductFeatureUpdateInput>;
export declare const ProductFeatureUpdateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    label: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    sortOrder: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodLazy<z.ZodType<Prisma.IntFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.IntFieldUpdateOperationsInput, unknown>>>]>>;
    product: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductUpdateOneRequiredWithoutFeaturesNestedInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUpdateOneRequiredWithoutFeaturesNestedInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductFeatureUpdateInput.schema.d.ts.map