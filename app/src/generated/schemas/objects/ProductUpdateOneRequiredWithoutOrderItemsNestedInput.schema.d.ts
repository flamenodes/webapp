import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ProductUpdateOneRequiredWithoutOrderItemsNestedInputObjectSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutOrderItemsNestedInput>;
export declare const ProductUpdateOneRequiredWithoutOrderItemsNestedInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductCreateWithoutOrderItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateWithoutOrderItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUncheckedCreateWithoutOrderItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedCreateWithoutOrderItemsInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductCreateOrConnectWithoutOrderItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateOrConnectWithoutOrderItemsInput, unknown>>>>;
    upsert: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductUpsertWithoutOrderItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUpsertWithoutOrderItemsInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereUniqueInput, unknown>>>>;
    update: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutOrderItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUpdateToOneWithWhereWithoutOrderItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUpdateWithoutOrderItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUpdateWithoutOrderItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUncheckedUpdateWithoutOrderItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedUpdateWithoutOrderItemsInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductUpdateOneRequiredWithoutOrderItemsNestedInput.schema.d.ts.map