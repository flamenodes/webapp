import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const SessionGroupBySchema: z.ZodType<Prisma.SessionGroupByArgs>;
export declare const SessionGroupByZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodType<Prisma.SessionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionWhereInput, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.SessionOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionOrderByWithAggregationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.SessionOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionOrderByWithAggregationInput, unknown>>>]>>;
    having: z.ZodOptional<z.ZodType<Prisma.SessionScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionScalarWhereWithAggregatesInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    by: z.ZodArray<z.ZodEnum<{
        id: "id";
        createdAt: "createdAt";
        userId: "userId";
        updatedAt: "updatedAt";
        expiresAt: "expiresAt";
        token: "token";
        ipAddress: "ipAddress";
        userAgent: "userAgent";
        impersonatedBy: "impersonatedBy";
    }>>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.SessionCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.SessionCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.SessionMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.SessionMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.SessionMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.SessionMaxAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=groupBySession.schema.d.ts.map