import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductCreateNestedOneWithoutBillingOptionsInputObjectSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutBillingOptionsInput>;
export declare const ProductCreateNestedOneWithoutBillingOptionsInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductCreateWithoutBillingOptionsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateWithoutBillingOptionsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUncheckedCreateWithoutBillingOptionsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedCreateWithoutBillingOptionsInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductCreateOrConnectWithoutBillingOptionsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateOrConnectWithoutBillingOptionsInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereUniqueInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductCreateNestedOneWithoutBillingOptionsInput.schema.d.ts.map