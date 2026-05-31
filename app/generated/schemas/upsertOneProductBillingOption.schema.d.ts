import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ProductBillingOptionUpsertOneSchema: z.ZodType<Prisma.ProductBillingOptionUpsertArgs>;
export declare const ProductBillingOptionUpsertOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ProductBillingOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.ProductBillingOptionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.ProductBillingOptionWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionWhereUniqueInput, unknown>>;
    create: z.ZodUnion<readonly [z.ZodType<Prisma.ProductBillingOptionCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionCreateInput, unknown>>, z.ZodType<Prisma.ProductBillingOptionUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionUncheckedCreateInput, unknown>>]>;
    update: z.ZodUnion<readonly [z.ZodType<Prisma.ProductBillingOptionUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionUpdateInput, unknown>>, z.ZodType<Prisma.ProductBillingOptionUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionUncheckedUpdateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=upsertOneProductBillingOption.schema.d.ts.map