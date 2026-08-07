import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { PageDocumentSelectObjectSchema as PageDocumentSelectObjectSchema } from './objects/PageDocumentSelect.schema';
import { PageDocumentUpdateManyMutationInputObjectSchema as PageDocumentUpdateManyMutationInputObjectSchema } from './objects/PageDocumentUpdateManyMutationInput.schema';
import { PageDocumentWhereInputObjectSchema as PageDocumentWhereInputObjectSchema } from './objects/PageDocumentWhereInput.schema';

export const PageDocumentUpdateManyAndReturnSchema: z.ZodType<Prisma.PageDocumentUpdateManyAndReturnArgs> = z.object({ select: PageDocumentSelectObjectSchema.optional(), data: PageDocumentUpdateManyMutationInputObjectSchema, where: PageDocumentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PageDocumentUpdateManyAndReturnArgs>;

export const PageDocumentUpdateManyAndReturnZodSchema = z.object({ select: PageDocumentSelectObjectSchema.optional(), data: PageDocumentUpdateManyMutationInputObjectSchema, where: PageDocumentWhereInputObjectSchema.optional() }).strict();