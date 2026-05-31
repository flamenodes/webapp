import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const DiscountCreateNestedOneWithoutProductInputObjectSchema: z.ZodType<Prisma.DiscountCreateNestedOneWithoutProductInput>;
export declare const DiscountCreateNestedOneWithoutProductInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DiscountCreateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountCreateWithoutProductInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.DiscountUncheckedCreateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountUncheckedCreateWithoutProductInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.DiscountCreateOrConnectWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountCreateOrConnectWithoutProductInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.DiscountWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountWhereUniqueInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=DiscountCreateNestedOneWithoutProductInput.schema.d.ts.map