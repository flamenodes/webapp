import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const PageDocumentCreateInputObjectSchema: z.ZodType<Prisma.PageDocumentCreateInput>;
export declare const PageDocumentCreateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    slug: z.ZodString;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        PUBLISHED: "PUBLISHED";
        DRAFT: "DRAFT";
    }>>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=PageDocumentCreateInput.schema.d.ts.map