import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { PageDocumentCreateManyInputObjectSchema as PageDocumentCreateManyInputObjectSchema } from './objects/PageDocumentCreateManyInput.schema';

export const PageDocumentCreateManySchema: z.ZodType<Prisma.PageDocumentCreateManyArgs> = z.object({ data: z.union([ PageDocumentCreateManyInputObjectSchema, z.array(PageDocumentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PageDocumentCreateManyArgs>;

export const PageDocumentCreateManyZodSchema = z.object({ data: z.union([ PageDocumentCreateManyInputObjectSchema, z.array(PageDocumentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();