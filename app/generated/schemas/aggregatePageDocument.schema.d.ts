import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const PageDocumentAggregateSchema: z.ZodType<Prisma.PageDocumentAggregateArgs>;
export declare const PageDocumentAggregateZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.PageDocumentOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.PageDocumentOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.PageDocumentWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.PageDocumentWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.PageDocumentCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.PageDocumentMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.PageDocumentMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentMaxAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=aggregatePageDocument.schema.d.ts.map