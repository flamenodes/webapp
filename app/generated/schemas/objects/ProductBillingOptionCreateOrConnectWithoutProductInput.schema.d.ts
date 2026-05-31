import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductBillingOptionCreateOrConnectWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionCreateOrConnectWithoutProductInput>;
export declare const ProductBillingOptionCreateOrConnectWithoutProductInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionCreateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionCreateWithoutProductInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionUncheckedCreateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionUncheckedCreateWithoutProductInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ProductBillingOptionCreateOrConnectWithoutProductInput.schema.d.ts.map