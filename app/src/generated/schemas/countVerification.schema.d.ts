import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const VerificationCountSchema: z.ZodType<Prisma.VerificationCountArgs>;
export declare const VerificationCountZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.VerificationOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.VerificationOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.VerificationWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.VerificationWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    select: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.VerificationCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.VerificationCountAggregateInputType, unknown>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=countVerification.schema.d.ts.map