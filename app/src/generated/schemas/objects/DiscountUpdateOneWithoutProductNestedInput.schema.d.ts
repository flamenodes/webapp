import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const DiscountUpdateOneWithoutProductNestedInputObjectSchema: z.ZodType<Prisma.DiscountUpdateOneWithoutProductNestedInput>;
export declare const DiscountUpdateOneWithoutProductNestedInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DiscountCreateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountCreateWithoutProductInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.DiscountUncheckedCreateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountUncheckedCreateWithoutProductInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.DiscountCreateOrConnectWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountCreateOrConnectWithoutProductInput, unknown>>>>;
    upsert: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.DiscountUpsertWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountUpsertWithoutProductInput, unknown>>>>;
    disconnect: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.DiscountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountWhereInput, unknown>>>]>>;
    delete: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.DiscountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountWhereInput, unknown>>>]>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.DiscountWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountWhereUniqueInput, unknown>>>>;
    update: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DiscountUpdateToOneWithWhereWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountUpdateToOneWithWhereWithoutProductInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.DiscountUpdateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountUpdateWithoutProductInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.DiscountUncheckedUpdateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountUncheckedUpdateWithoutProductInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=DiscountUpdateOneWithoutProductNestedInput.schema.d.ts.map