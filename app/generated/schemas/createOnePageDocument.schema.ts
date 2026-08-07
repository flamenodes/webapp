import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { PageDocumentSelectObjectSchema as PageDocumentSelectObjectSchema } from './objects/PageDocumentSelect.schema';
import { PageDocumentCreateInputObjectSchema as PageDocumentCreateInputObjectSchema } from './objects/PageDocumentCreateInput.schema';
import { PageDocumentUncheckedCreateInputObjectSchema as PageDocumentUncheckedCreateInputObjectSchema } from './objects/PageDocumentUncheckedCreateInput.schema';

export const PageDocumentCreateOneSchema: z.ZodType<Prisma.PageDocumentCreateArgs> = z.object({ select: PageDocumentSelectObjectSchema.optional(),  data: z.union([PageDocumentCreateInputObjectSchema, PageDocumentUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.PageDocumentCreateArgs>;

export const PageDocumentCreateOneZodSchema = z.object({ select: PageDocumentSelectObjectSchema.optional(),  data: z.union([PageDocumentCreateInputObjectSchema, PageDocumentUncheckedCreateInputObjectSchema]) }).strict();