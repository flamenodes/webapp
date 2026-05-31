import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const SessionCountSchema: z.ZodType<Prisma.SessionCountArgs>;
export declare const SessionCountZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.SessionOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.SessionOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.SessionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.SessionWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    select: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.SessionCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.SessionCountAggregateInputType, unknown>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=countSession.schema.d.ts.map