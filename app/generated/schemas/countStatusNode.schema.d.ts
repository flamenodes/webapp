import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const StatusNodeCountSchema: z.ZodType<Prisma.StatusNodeCountArgs>;
export declare const StatusNodeCountZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.StatusNodeOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.StatusNodeOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.StatusNodeWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.StatusNodeWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    select: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.StatusNodeCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeCountAggregateInputType, unknown>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=countStatusNode.schema.d.ts.map