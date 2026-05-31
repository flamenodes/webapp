import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const DiscountUpsertWithoutProductInputObjectSchema: z.ZodType<Prisma.DiscountUpsertWithoutProductInput>;
export declare const DiscountUpsertWithoutProductInputObjectZodSchema: z.ZodObject<{
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DiscountUpdateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountUpdateWithoutProductInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.DiscountUncheckedUpdateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountUncheckedUpdateWithoutProductInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DiscountCreateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountCreateWithoutProductInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.DiscountUncheckedCreateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountUncheckedCreateWithoutProductInput, unknown>>>]>;
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.DiscountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=DiscountUpsertWithoutProductInput.schema.d.ts.map