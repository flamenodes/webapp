import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const RazorpayConfigAggregateSchema: z.ZodType<Prisma.RazorpayConfigAggregateArgs>;
export declare const RazorpayConfigAggregateZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.RazorpayConfigOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.RazorpayConfigOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.RazorpayConfigWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.RazorpayConfigWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.RazorpayConfigCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.RazorpayConfigMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.RazorpayConfigMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigMaxAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=aggregateRazorpayConfig.schema.d.ts.map