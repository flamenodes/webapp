import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const PageDocumentUpdateOneSchema: z.ZodType<Prisma.PageDocumentUpdateArgs>;
export declare const PageDocumentUpdateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.PageDocumentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.PageDocumentUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentUpdateInput, unknown>>, z.ZodType<Prisma.PageDocumentUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentUncheckedUpdateInput, unknown>>]>;
    where: z.ZodType<Prisma.PageDocumentWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=updateOnePageDocument.schema.d.ts.map