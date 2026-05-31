import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const PageDocumentCreateManyInputObjectSchema: z.ZodType<Prisma.PageDocumentCreateManyInput>;
export declare const PageDocumentCreateManyInputObjectZodSchema: z.ZodObject<{
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
    updatedAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=PageDocumentCreateManyInput.schema.d.ts.map