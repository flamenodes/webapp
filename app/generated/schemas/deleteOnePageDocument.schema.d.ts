import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const PageDocumentDeleteOneSchema: z.ZodType<Prisma.PageDocumentDeleteArgs>;
export declare const PageDocumentDeleteOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.PageDocumentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.PageDocumentWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=deleteOnePageDocument.schema.d.ts.map