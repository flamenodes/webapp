import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const DiscountUpdateToOneWithWhereWithoutProductInputObjectSchema: z.ZodType<Prisma.DiscountUpdateToOneWithWhereWithoutProductInput>;
export declare const DiscountUpdateToOneWithWhereWithoutProductInputObjectZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.DiscountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountWhereInput, unknown>>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DiscountUpdateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountUpdateWithoutProductInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.DiscountUncheckedUpdateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountUncheckedUpdateWithoutProductInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=DiscountUpdateToOneWithWhereWithoutProductInput.schema.d.ts.map