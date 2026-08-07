import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { AnnouncementOrderByWithRelationInputObjectSchema as AnnouncementOrderByWithRelationInputObjectSchema } from './objects/AnnouncementOrderByWithRelationInput.schema';
import { AnnouncementWhereInputObjectSchema as AnnouncementWhereInputObjectSchema } from './objects/AnnouncementWhereInput.schema';
import { AnnouncementWhereUniqueInputObjectSchema as AnnouncementWhereUniqueInputObjectSchema } from './objects/AnnouncementWhereUniqueInput.schema';
import { AnnouncementCountAggregateInputObjectSchema as AnnouncementCountAggregateInputObjectSchema } from './objects/AnnouncementCountAggregateInput.schema';

export const AnnouncementCountSchema: z.ZodType<Prisma.AnnouncementCountArgs> = z.object({ orderBy: z.union([AnnouncementOrderByWithRelationInputObjectSchema, AnnouncementOrderByWithRelationInputObjectSchema.array()]).optional(), where: AnnouncementWhereInputObjectSchema.optional(), cursor: AnnouncementWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AnnouncementCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.AnnouncementCountArgs>;

export const AnnouncementCountZodSchema = z.object({ orderBy: z.union([AnnouncementOrderByWithRelationInputObjectSchema, AnnouncementOrderByWithRelationInputObjectSchema.array()]).optional(), where: AnnouncementWhereInputObjectSchema.optional(), cursor: AnnouncementWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AnnouncementCountAggregateInputObjectSchema ]).optional() }).strict();