import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const VerificationGroupBySchema: z.ZodType<Prisma.VerificationGroupByArgs>;
export declare const VerificationGroupByZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodType<Prisma.VerificationWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationWhereInput, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.VerificationOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationOrderByWithAggregationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.VerificationOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationOrderByWithAggregationInput, unknown>>>]>>;
    having: z.ZodOptional<z.ZodType<Prisma.VerificationScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationScalarWhereWithAggregatesInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    by: z.ZodArray<z.ZodEnum<{
        value: "value";
        id: "id";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        expiresAt: "expiresAt";
        identifier: "identifier";
    }>>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.VerificationCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.VerificationCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.VerificationMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.VerificationMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.VerificationMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.VerificationMaxAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=groupByVerification.schema.d.ts.map