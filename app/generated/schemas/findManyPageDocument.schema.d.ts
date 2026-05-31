import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const PageDocumentFindManySelectSchema: z.ZodType<Prisma.PageDocumentSelect>;
export declare const PageDocumentFindManySelectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodBoolean>;
    slug: z.ZodOptional<z.ZodBoolean>;
    title: z.ZodOptional<z.ZodBoolean>;
    description: z.ZodOptional<z.ZodBoolean>;
    content: z.ZodOptional<z.ZodBoolean>;
    status: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodBoolean>;
    updatedAt: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export declare const PageDocumentFindManySchema: z.ZodType<Prisma.PageDocumentFindManyArgs>;
export declare const PageDocumentFindManyZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.PageDocumentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.PageDocumentOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.PageDocumentOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.PageDocumentWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.PageDocumentWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    distinct: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        id: "id";
        title: "title";
        description: "description";
        createdAt: "createdAt";
        status: "status";
        updatedAt: "updatedAt";
        content: "content";
        slug: "slug";
    }>, z.ZodArray<z.ZodEnum<{
        id: "id";
        title: "title";
        description: "description";
        createdAt: "createdAt";
        status: "status";
        updatedAt: "updatedAt";
        content: "content";
        slug: "slug";
    }>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=findManyPageDocument.schema.d.ts.map