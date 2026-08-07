import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { PageDocumentSelectObjectSchema as PageDocumentSelectObjectSchema } from './objects/PageDocumentSelect.schema';
import { PageDocumentWhereUniqueInputObjectSchema as PageDocumentWhereUniqueInputObjectSchema } from './objects/PageDocumentWhereUniqueInput.schema';

export const PageDocumentDeleteOneSchema: z.ZodType<Prisma.PageDocumentDeleteArgs> = z.object({ select: PageDocumentSelectObjectSchema.optional(),  where: PageDocumentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PageDocumentDeleteArgs>;

export const PageDocumentDeleteOneZodSchema = z.object({ select: PageDocumentSelectObjectSchema.optional(),  where: PageDocumentWhereUniqueInputObjectSchema }).strict();