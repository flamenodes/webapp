import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ProductCreateNestedOneWithoutCartItemsInputObjectSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutCartItemsInput>;
export declare const ProductCreateNestedOneWithoutCartItemsInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductCreateWithoutCartItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateWithoutCartItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUncheckedCreateWithoutCartItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedCreateWithoutCartItemsInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductCreateOrConnectWithoutCartItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateOrConnectWithoutCartItemsInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereUniqueInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductCreateNestedOneWithoutCartItemsInput.schema.d.ts.map