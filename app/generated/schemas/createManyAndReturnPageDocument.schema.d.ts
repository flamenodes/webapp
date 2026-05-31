import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const PageDocumentCreateManyAndReturnSchema: z.ZodType<Prisma.PageDocumentCreateManyAndReturnArgs>;
export declare const PageDocumentCreateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.PageDocumentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.PageDocumentCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.PageDocumentCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyAndReturnPageDocument.schema.d.ts.map