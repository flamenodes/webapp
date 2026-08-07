import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { AnnouncementOrderByWithRelationInputObjectSchema as AnnouncementOrderByWithRelationInputObjectSchema } from './objects/AnnouncementOrderByWithRelationInput.schema';
import { AnnouncementWhereInputObjectSchema as AnnouncementWhereInputObjectSchema } from './objects/AnnouncementWhereInput.schema';
import { AnnouncementWhereUniqueInputObjectSchema as AnnouncementWhereUniqueInputObjectSchema } from './objects/AnnouncementWhereUniqueInput.schema';
import { AnnouncementScalarFieldEnumSchema } from './enums/AnnouncementScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AnnouncementFindManySelectSchema: z.ZodType<Prisma.AnnouncementSelect> = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    message: z.boolean().optional(),
    type: z.boolean().optional(),
    active: z.boolean().optional(),
    priority: z.boolean().optional(),
    link: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AnnouncementSelect>;

export const AnnouncementFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    message: z.boolean().optional(),
    type: z.boolean().optional(),
    active: z.boolean().optional(),
    priority: z.boolean().optional(),
    link: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const AnnouncementFindManySchema: z.ZodType<Prisma.AnnouncementFindManyArgs> = z.object({ select: AnnouncementFindManySelectSchema.optional(),  orderBy: z.union([AnnouncementOrderByWithRelationInputObjectSchema, AnnouncementOrderByWithRelationInputObjectSchema.array()]).optional(), where: AnnouncementWhereInputObjectSchema.optional(), cursor: AnnouncementWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AnnouncementScalarFieldEnumSchema, AnnouncementScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AnnouncementFindManyArgs>;

export const AnnouncementFindManyZodSchema = z.object({ select: AnnouncementFindManySelectSchema.optional(),  orderBy: z.union([AnnouncementOrderByWithRelationInputObjectSchema, AnnouncementOrderByWithRelationInputObjectSchema.array()]).optional(), where: AnnouncementWhereInputObjectSchema.optional(), cursor: AnnouncementWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AnnouncementScalarFieldEnumSchema, AnnouncementScalarFieldEnumSchema.array()]).optional() }).strict();