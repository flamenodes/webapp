import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { WebSettingsOrderByWithRelationInputObjectSchema as WebSettingsOrderByWithRelationInputObjectSchema } from './objects/WebSettingsOrderByWithRelationInput.schema';
import { WebSettingsWhereInputObjectSchema as WebSettingsWhereInputObjectSchema } from './objects/WebSettingsWhereInput.schema';
import { WebSettingsWhereUniqueInputObjectSchema as WebSettingsWhereUniqueInputObjectSchema } from './objects/WebSettingsWhereUniqueInput.schema';
import { WebSettingsCountAggregateInputObjectSchema as WebSettingsCountAggregateInputObjectSchema } from './objects/WebSettingsCountAggregateInput.schema';

export const WebSettingsCountSchema: z.ZodType<Prisma.WebSettingsCountArgs> = z.object({ orderBy: z.union([WebSettingsOrderByWithRelationInputObjectSchema, WebSettingsOrderByWithRelationInputObjectSchema.array()]).optional(), where: WebSettingsWhereInputObjectSchema.optional(), cursor: WebSettingsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WebSettingsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.WebSettingsCountArgs>;

export const WebSettingsCountZodSchema = z.object({ orderBy: z.union([WebSettingsOrderByWithRelationInputObjectSchema, WebSettingsOrderByWithRelationInputObjectSchema.array()]).optional(), where: WebSettingsWhereInputObjectSchema.optional(), cursor: WebSettingsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WebSettingsCountAggregateInputObjectSchema ]).optional() }).strict();