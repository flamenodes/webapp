import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const ServerCountSchema: z.ZodType<Prisma.ServerCountArgs>;
export declare const ServerCountZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.ServerOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ServerOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.ServerWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.ServerWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    select: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.ServerCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ServerCountAggregateInputType, unknown>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=countServer.schema.d.ts.map