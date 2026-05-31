import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const VerificationAggregateSchema: z.ZodType<Prisma.VerificationAggregateArgs>;
export declare const VerificationAggregateZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.VerificationOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.VerificationOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.VerificationWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.VerificationWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.VerificationCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.VerificationCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.VerificationMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.VerificationMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.VerificationMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.VerificationMaxAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=aggregateVerification.schema.d.ts.map