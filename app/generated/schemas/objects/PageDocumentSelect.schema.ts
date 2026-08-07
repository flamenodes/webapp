import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  slug: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  content: z.boolean().optional(),
  status: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const PageDocumentSelectObjectSchema: z.ZodType<Prisma.PageDocumentSelect> = makeSchema() as unknown as z.ZodType<Prisma.PageDocumentSelect>;
export const PageDocumentSelectObjectZodSchema = makeSchema();
