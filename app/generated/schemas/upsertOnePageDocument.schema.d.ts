import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const PageDocumentUpsertOneSchema: z.ZodType<Prisma.PageDocumentUpsertArgs>;
export declare const PageDocumentUpsertOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.PageDocumentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.PageDocumentWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentWhereUniqueInput, unknown>>;
    create: z.ZodUnion<readonly [z.ZodType<Prisma.PageDocumentCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentCreateInput, unknown>>, z.ZodType<Prisma.PageDocumentUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentUncheckedCreateInput, unknown>>]>;
    update: z.ZodUnion<readonly [z.ZodType<Prisma.PageDocumentUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentUpdateInput, unknown>>, z.ZodType<Prisma.PageDocumentUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.PageDocumentUncheckedUpdateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=upsertOnePageDocument.schema.d.ts.map