import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const SessionAggregateSchema: z.ZodType<Prisma.SessionAggregateArgs>;
export declare const SessionAggregateZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.SessionOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.SessionOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.SessionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.SessionWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.SessionCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.SessionCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.SessionMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.SessionMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.SessionMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.SessionMaxAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=aggregateSession.schema.d.ts.map