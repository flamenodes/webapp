import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { PageDocumentSelectObjectSchema as PageDocumentSelectObjectSchema } from './objects/PageDocumentSelect.schema';
import { PageDocumentWhereUniqueInputObjectSchema as PageDocumentWhereUniqueInputObjectSchema } from './objects/PageDocumentWhereUniqueInput.schema';

export const PageDocumentFindUniqueSchema: z.ZodType<Prisma.PageDocumentFindUniqueArgs> = z.object({ select: PageDocumentSelectObjectSchema.optional(),  where: PageDocumentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PageDocumentFindUniqueArgs>;

export const PageDocumentFindUniqueZodSchema = z.object({ select: PageDocumentSelectObjectSchema.optional(),  where: PageDocumentWhereUniqueInputObjectSchema }).strict();