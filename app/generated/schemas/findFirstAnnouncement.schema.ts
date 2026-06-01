import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { AnnouncementOrderByWithRelationInputObjectSchema as AnnouncementOrderByWithRelationInputObjectSchema } from './objects/AnnouncementOrderByWithRelationInput.schema';
import { AnnouncementWhereInputObjectSchema as AnnouncementWhereInputObjectSchema } from './objects/AnnouncementWhereInput.schema';
import { AnnouncementWhereUniqueInputObjectSchema as AnnouncementWhereUniqueInputObjectSchema } from './objects/AnnouncementWhereUniqueInput.schema';
import { AnnouncementScalarFieldEnumSchema } from './enums/AnnouncementScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AnnouncementFindFirstSelectSchema: z.ZodType<Prisma.AnnouncementSelect> = z.object({
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

export const AnnouncementFindFirstSelectZodSchema = z.object({
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

export const AnnouncementFindFirstSchema: z.ZodType<Prisma.AnnouncementFindFirstArgs> = z.object({ select: AnnouncementFindFirstSelectSchema.optional(),  orderBy: z.union([AnnouncementOrderByWithRelationInputObjectSchema, AnnouncementOrderByWithRelationInputObjectSchema.array()]).optional(), where: AnnouncementWhereInputObjectSchema.optional(), cursor: AnnouncementWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AnnouncementScalarFieldEnumSchema, AnnouncementScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AnnouncementFindFirstArgs>;

export const AnnouncementFindFirstZodSchema = z.object({ select: AnnouncementFindFirstSelectSchema.optional(),  orderBy: z.union([AnnouncementOrderByWithRelationInputObjectSchema, AnnouncementOrderByWithRelationInputObjectSchema.array()]).optional(), where: AnnouncementWhereInputObjectSchema.optional(), cursor: AnnouncementWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AnnouncementScalarFieldEnumSchema, AnnouncementScalarFieldEnumSchema.array()]).optional() }).strict();