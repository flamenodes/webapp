import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const DiscountUpdateInputObjectSchema: z.ZodType<Prisma.DiscountUpdateInput>;
export declare const DiscountUpdateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    label: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    percentage: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodLazy<z.ZodType<Prisma.IntFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.IntFieldUpdateOperationsInput, unknown>>>]>>;
    product: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductUpdateManyWithoutDiscountNestedInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUpdateManyWithoutDiscountNestedInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=DiscountUpdateInput.schema.d.ts.map