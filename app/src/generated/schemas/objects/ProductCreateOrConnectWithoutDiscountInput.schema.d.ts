import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ProductCreateOrConnectWithoutDiscountInputObjectSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutDiscountInput>;
export declare const ProductCreateOrConnectWithoutDiscountInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.ProductWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductCreateWithoutDiscountInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateWithoutDiscountInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUncheckedCreateWithoutDiscountInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedCreateWithoutDiscountInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ProductCreateOrConnectWithoutDiscountInput.schema.d.ts.map