import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const PageDocumentCreateOneSchema: z.ZodType<Prisma.PageDocumentCreateArgs>;
export declare const PageDocumentCreateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.PageDocumentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.PageDocumentCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentCreateInput, unknown>>, z.ZodType<Prisma.PageDocumentUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentUncheckedCreateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=createOnePageDocument.schema.d.ts.map