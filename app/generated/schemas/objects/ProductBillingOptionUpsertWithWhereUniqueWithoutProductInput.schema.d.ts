import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductBillingOptionUpsertWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionUpsertWithWhereUniqueWithoutProductInput>;
export declare const ProductBillingOptionUpsertWithWhereUniqueWithoutProductInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionWhereUniqueInput, unknown>>>;
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionUpdateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionUpdateWithoutProductInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionUncheckedUpdateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionUncheckedUpdateWithoutProductInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionCreateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionCreateWithoutProductInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionUncheckedCreateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionUncheckedCreateWithoutProductInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ProductBillingOptionUpsertWithWhereUniqueWithoutProductInput.schema.d.ts.map