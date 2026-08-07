import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { PageDocumentWhereInputObjectSchema as PageDocumentWhereInputObjectSchema } from './objects/PageDocumentWhereInput.schema';

export const PageDocumentDeleteManySchema: z.ZodType<Prisma.PageDocumentDeleteManyArgs> = z.object({ where: PageDocumentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PageDocumentDeleteManyArgs>;

export const PageDocumentDeleteManyZodSchema = z.object({ where: PageDocumentWhereInputObjectSchema.optional() }).strict();