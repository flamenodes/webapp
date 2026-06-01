import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { WebSettingsOrderByWithRelationInputObjectSchema as WebSettingsOrderByWithRelationInputObjectSchema } from './objects/WebSettingsOrderByWithRelationInput.schema';
import { WebSettingsWhereInputObjectSchema as WebSettingsWhereInputObjectSchema } from './objects/WebSettingsWhereInput.schema';
import { WebSettingsWhereUniqueInputObjectSchema as WebSettingsWhereUniqueInputObjectSchema } from './objects/WebSettingsWhereUniqueInput.schema';
import { WebSettingsScalarFieldEnumSchema } from './enums/WebSettingsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WebSettingsFindManySelectSchema: z.ZodType<Prisma.WebSettingsSelect> = z.object({
    id: z.boolean().optional(),
    key: z.boolean().optional(),
    value: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.WebSettingsSelect>;

export const WebSettingsFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    key: z.boolean().optional(),
    value: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict();

export const WebSettingsFindManySchema: z.ZodType<Prisma.WebSettingsFindManyArgs> = z.object({ select: WebSettingsFindManySelectSchema.optional(),  orderBy: z.union([WebSettingsOrderByWithRelationInputObjectSchema, WebSettingsOrderByWithRelationInputObjectSchema.array()]).optional(), where: WebSettingsWhereInputObjectSchema.optional(), cursor: WebSettingsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WebSettingsScalarFieldEnumSchema, WebSettingsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.WebSettingsFindManyArgs>;

export const WebSettingsFindManyZodSchema = z.object({ select: WebSettingsFindManySelectSchema.optional(),  orderBy: z.union([WebSettingsOrderByWithRelationInputObjectSchema, WebSettingsOrderByWithRelationInputObjectSchema.array()]).optional(), where: WebSettingsWhereInputObjectSchema.optional(), cursor: WebSettingsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WebSettingsScalarFieldEnumSchema, WebSettingsScalarFieldEnumSchema.array()]).optional() }).strict();