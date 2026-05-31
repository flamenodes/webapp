import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const DiscountUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.DiscountUncheckedUpdateInput>;
export declare const DiscountUncheckedUpdateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    label: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    percentage: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodLazy<z.ZodType<Prisma.IntFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.IntFieldUpdateOperationsInput, unknown>>>]>>;
    product: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutDiscountNestedInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedUpdateManyWithoutDiscountNestedInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=DiscountUncheckedUpdateInput.schema.d.ts.map