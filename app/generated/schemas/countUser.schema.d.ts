import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const UserCountSchema: z.ZodType<Prisma.UserCountArgs>;
export declare const UserCountZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.UserOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.UserOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.UserOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.UserOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.UserWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.UserWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    select: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.UserCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.UserCountAggregateInputType, unknown>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=countUser.schema.d.ts.map