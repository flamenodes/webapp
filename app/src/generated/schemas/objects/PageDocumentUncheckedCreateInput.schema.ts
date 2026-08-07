import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { PageStatusSchema } from '../enums/PageStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  slug: z.string(),
  title: z.string(),
  description: z.string().optional(),
  content: z.string().optional(),
  status: PageStatusSchema.optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional()
}).strict();
export const PageDocumentUncheckedCreateInputObjectSchema: z.ZodType<Prisma.PageDocumentUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PageDocumentUncheckedCreateInput>;
export const PageDocumentUncheckedCreateInputObjectZodSchema = makeSchema();
