import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { PageDocumentOrderByWithRelationInputObjectSchema as PageDocumentOrderByWithRelationInputObjectSchema } from './objects/PageDocumentOrderByWithRelationInput.schema';
import { PageDocumentWhereInputObjectSchema as PageDocumentWhereInputObjectSchema } from './objects/PageDocumentWhereInput.schema';
import { PageDocumentWhereUniqueInputObjectSchema as PageDocumentWhereUniqueInputObjectSchema } from './objects/PageDocumentWhereUniqueInput.schema';
import { PageDocumentCountAggregateInputObjectSchema as PageDocumentCountAggregateInputObjectSchema } from './objects/PageDocumentCountAggregateInput.schema';

export const PageDocumentCountSchema: z.ZodType<Prisma.PageDocumentCountArgs> = z.object({ orderBy: z.union([PageDocumentOrderByWithRelationInputObjectSchema, PageDocumentOrderByWithRelationInputObjectSchema.array()]).optional(), where: PageDocumentWhereInputObjectSchema.optional(), cursor: PageDocumentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PageDocumentCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.PageDocumentCountArgs>;

export const PageDocumentCountZodSchema = z.object({ orderBy: z.union([PageDocumentOrderByWithRelationInputObjectSchema, PageDocumentOrderByWithRelationInputObjectSchema.array()]).optional(), where: PageDocumentWhereInputObjectSchema.optional(), cursor: PageDocumentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PageDocumentCountAggregateInputObjectSchema ]).optional() }).strict();