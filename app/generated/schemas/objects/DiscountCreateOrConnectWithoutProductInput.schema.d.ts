import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const DiscountCreateOrConnectWithoutProductInputObjectSchema: z.ZodType<Prisma.DiscountCreateOrConnectWithoutProductInput>;
export declare const DiscountCreateOrConnectWithoutProductInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.DiscountWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DiscountCreateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountCreateWithoutProductInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.DiscountUncheckedCreateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountUncheckedCreateWithoutProductInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=DiscountCreateOrConnectWithoutProductInput.schema.d.ts.map