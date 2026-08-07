import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  slug: z.literal(true).optional(),
  title: z.literal(true).optional(),
  description: z.literal(true).optional(),
  content: z.literal(true).optional(),
  status: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const PageDocumentMinAggregateInputObjectSchema: z.ZodType<Prisma.PageDocumentMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PageDocumentMinAggregateInputType>;
export const PageDocumentMinAggregateInputObjectZodSchema = makeSchema();
