import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
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
export const PageDocumentCreateInputObjectSchema: z.ZodType<Prisma.PageDocumentCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PageDocumentCreateInput>;
export const PageDocumentCreateInputObjectZodSchema = makeSchema();
