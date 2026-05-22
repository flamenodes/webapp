import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { PageStatusSchema } from '../enums/PageStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  slug: z.string(),
  title: z.string(),
  description: z.string().optional(),
  content: z.string().optional(),
  status: PageStatusSchema.optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const PageDocumentUncheckedCreateInputObjectSchema: z.ZodType<Prisma.PageDocumentUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PageDocumentUncheckedCreateInput>;
export const PageDocumentUncheckedCreateInputObjectZodSchema = makeSchema();
