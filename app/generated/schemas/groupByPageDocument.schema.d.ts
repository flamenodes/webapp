import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const PageDocumentGroupBySchema: z.ZodType<Prisma.PageDocumentGroupByArgs>;
export declare const PageDocumentGroupByZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodType<Prisma.PageDocumentWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentWhereInput, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.PageDocumentOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentOrderByWithAggregationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.PageDocumentOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentOrderByWithAggregationInput, unknown>>>]>>;
    having: z.ZodOptional<z.ZodType<Prisma.PageDocumentScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentScalarWhereWithAggregatesInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    by: z.ZodArray<z.ZodEnum<{
        id: "id";
        title: "title";
        description: "description";
        createdAt: "createdAt";
        status: "status";
        updatedAt: "updatedAt";
        content: "content";
        slug: "slug";
    }>>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.PageDocumentCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.PageDocumentMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.PageDocumentMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentMaxAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=groupByPageDocument.schema.d.ts.map