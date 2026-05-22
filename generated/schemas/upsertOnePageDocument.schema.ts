import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { PageDocumentSelectObjectSchema as PageDocumentSelectObjectSchema } from './objects/PageDocumentSelect.schema';
import { PageDocumentWhereUniqueInputObjectSchema as PageDocumentWhereUniqueInputObjectSchema } from './objects/PageDocumentWhereUniqueInput.schema';
import { PageDocumentCreateInputObjectSchema as PageDocumentCreateInputObjectSchema } from './objects/PageDocumentCreateInput.schema';
import { PageDocumentUncheckedCreateInputObjectSchema as PageDocumentUncheckedCreateInputObjectSchema } from './objects/PageDocumentUncheckedCreateInput.schema';
import { PageDocumentUpdateInputObjectSchema as PageDocumentUpdateInputObjectSchema } from './objects/PageDocumentUpdateInput.schema';
import { PageDocumentUncheckedUpdateInputObjectSchema as PageDocumentUncheckedUpdateInputObjectSchema } from './objects/PageDocumentUncheckedUpdateInput.schema';

export const PageDocumentUpsertOneSchema: z.ZodType<Prisma.PageDocumentUpsertArgs> = z.object({ select: PageDocumentSelectObjectSchema.optional(),  where: PageDocumentWhereUniqueInputObjectSchema, create: z.union([ PageDocumentCreateInputObjectSchema, PageDocumentUncheckedCreateInputObjectSchema ]), update: z.union([ PageDocumentUpdateInputObjectSchema, PageDocumentUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.PageDocumentUpsertArgs>;

export const PageDocumentUpsertOneZodSchema = z.object({ select: PageDocumentSelectObjectSchema.optional(),  where: PageDocumentWhereUniqueInputObjectSchema, create: z.union([ PageDocumentCreateInputObjectSchema, PageDocumentUncheckedCreateInputObjectSchema ]), update: z.union([ PageDocumentUpdateInputObjectSchema, PageDocumentUncheckedUpdateInputObjectSchema ]) }).strict();