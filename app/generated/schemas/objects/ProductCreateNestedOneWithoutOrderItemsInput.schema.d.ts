import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductCreateNestedOneWithoutOrderItemsInputObjectSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutOrderItemsInput>;
export declare const ProductCreateNestedOneWithoutOrderItemsInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductCreateWithoutOrderItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateWithoutOrderItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUncheckedCreateWithoutOrderItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedCreateWithoutOrderItemsInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductCreateOrConnectWithoutOrderItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateOrConnectWithoutOrderItemsInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereUniqueInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductCreateNestedOneWithoutOrderItemsInput.schema.d.ts.map