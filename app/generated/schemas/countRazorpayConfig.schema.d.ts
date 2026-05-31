import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const RazorpayConfigCountSchema: z.ZodType<Prisma.RazorpayConfigCountArgs>;
export declare const RazorpayConfigCountZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.RazorpayConfigOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.RazorpayConfigOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.RazorpayConfigWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.RazorpayConfigWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    select: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.RazorpayConfigCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigCountAggregateInputType, unknown>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=countRazorpayConfig.schema.d.ts.map