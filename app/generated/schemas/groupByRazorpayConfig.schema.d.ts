import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const RazorpayConfigGroupBySchema: z.ZodType<Prisma.RazorpayConfigGroupByArgs>;
export declare const RazorpayConfigGroupByZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodType<Prisma.RazorpayConfigWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigWhereInput, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.RazorpayConfigOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigOrderByWithAggregationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.RazorpayConfigOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigOrderByWithAggregationInput, unknown>>>]>>;
    having: z.ZodOptional<z.ZodType<Prisma.RazorpayConfigScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigScalarWhereWithAggregatesInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    by: z.ZodArray<z.ZodEnum<{
        id: "id";
        createdAt: "createdAt";
        mode: "mode";
        updatedAt: "updatedAt";
        testKeyId: "testKeyId";
        testKeySecret: "testKeySecret";
        prodKeyId: "prodKeyId";
        prodKeySecret: "prodKeySecret";
        gstin: "gstin";
        companyName: "companyName";
        companyAddress: "companyAddress";
        companyCity: "companyCity";
        companyZip: "companyZip";
        companyCountry: "companyCountry";
    }>>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.RazorpayConfigCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.RazorpayConfigMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.RazorpayConfigMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigMaxAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=groupByRazorpayConfig.schema.d.ts.map