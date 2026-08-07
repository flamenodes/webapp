import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { PageDocumentSelectObjectSchema as PageDocumentSelectObjectSchema } from './objects/PageDocumentSelect.schema';
import { PageDocumentCreateManyInputObjectSchema as PageDocumentCreateManyInputObjectSchema } from './objects/PageDocumentCreateManyInput.schema';

export const PageDocumentCreateManyAndReturnSchema: z.ZodType<Prisma.PageDocumentCreateManyAndReturnArgs> = z.object({ select: PageDocumentSelectObjectSchema.optional(), data: z.union([ PageDocumentCreateManyInputObjectSchema, z.array(PageDocumentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PageDocumentCreateManyAndReturnArgs>;

export const PageDocumentCreateManyAndReturnZodSchema = z.object({ select: PageDocumentSelectObjectSchema.optional(), data: z.union([ PageDocumentCreateManyInputObjectSchema, z.array(PageDocumentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();