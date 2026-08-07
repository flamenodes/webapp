import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional(),
  slug: z.string().optional()
}).strict();
export const PageDocumentWhereUniqueInputObjectSchema: z.ZodType<Prisma.PageDocumentWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.PageDocumentWhereUniqueInput>;
export const PageDocumentWhereUniqueInputObjectZodSchema = makeSchema();
