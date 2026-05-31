import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductCreateOrConnectWithoutBillingOptionsInputObjectSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutBillingOptionsInput>;
export declare const ProductCreateOrConnectWithoutBillingOptionsInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.ProductWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductCreateWithoutBillingOptionsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateWithoutBillingOptionsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUncheckedCreateWithoutBillingOptionsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedCreateWithoutBillingOptionsInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ProductCreateOrConnectWithoutBillingOptionsInput.schema.d.ts.map