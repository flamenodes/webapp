import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductCreateOrConnectWithoutOrderItemsInputObjectSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutOrderItemsInput>;
export declare const ProductCreateOrConnectWithoutOrderItemsInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.ProductWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductCreateWithoutOrderItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateWithoutOrderItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUncheckedCreateWithoutOrderItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedCreateWithoutOrderItemsInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ProductCreateOrConnectWithoutOrderItemsInput.schema.d.ts.map