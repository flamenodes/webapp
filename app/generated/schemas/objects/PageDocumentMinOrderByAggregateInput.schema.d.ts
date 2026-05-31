import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const PageDocumentMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PageDocumentMinOrderByAggregateInput>;
export declare const PageDocumentMinOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    slug: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    title: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    description: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    content: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    status: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    createdAt: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    updatedAt: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=PageDocumentMinOrderByAggregateInput.schema.d.ts.map