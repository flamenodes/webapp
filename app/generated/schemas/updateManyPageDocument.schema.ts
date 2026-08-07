import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { PageDocumentUpdateManyMutationInputObjectSchema as PageDocumentUpdateManyMutationInputObjectSchema } from './objects/PageDocumentUpdateManyMutationInput.schema';
import { PageDocumentWhereInputObjectSchema as PageDocumentWhereInputObjectSchema } from './objects/PageDocumentWhereInput.schema';

export const PageDocumentUpdateManySchema: z.ZodType<Prisma.PageDocumentUpdateManyArgs> = z.object({ data: PageDocumentUpdateManyMutationInputObjectSchema, where: PageDocumentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PageDocumentUpdateManyArgs>;

export const PageDocumentUpdateManyZodSchema = z.object({ data: PageDocumentUpdateManyMutationInputObjectSchema, where: PageDocumentWhereInputObjectSchema.optional() }).strict();