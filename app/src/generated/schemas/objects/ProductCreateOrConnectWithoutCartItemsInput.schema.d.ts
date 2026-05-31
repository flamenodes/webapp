import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ProductCreateOrConnectWithoutCartItemsInputObjectSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutCartItemsInput>;
export declare const ProductCreateOrConnectWithoutCartItemsInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.ProductWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductCreateWithoutCartItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateWithoutCartItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUncheckedCreateWithoutCartItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedCreateWithoutCartItemsInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ProductCreateOrConnectWithoutCartItemsInput.schema.d.ts.map