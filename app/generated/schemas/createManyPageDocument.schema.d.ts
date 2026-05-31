import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const PageDocumentCreateManySchema: z.ZodType<Prisma.PageDocumentCreateManyArgs>;
export declare const PageDocumentCreateManyZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodType<Prisma.PageDocumentCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.PageDocumentCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyPageDocument.schema.d.ts.map