import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const PageDocumentCountSchema: z.ZodType<Prisma.PageDocumentCountArgs>;
export declare const PageDocumentCountZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.PageDocumentOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.PageDocumentOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.PageDocumentWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.PageDocumentWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    select: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.PageDocumentCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentCountAggregateInputType, unknown>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=countPageDocument.schema.d.ts.map