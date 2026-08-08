import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { ConfigurationOptionIncludeObjectSchema as ConfigurationOptionIncludeObjectSchema } from './objects/ConfigurationOptionInclude.schema';
import { ConfigurationOptionOrderByWithRelationInputObjectSchema as ConfigurationOptionOrderByWithRelationInputObjectSchema } from './objects/ConfigurationOptionOrderByWithRelationInput.schema';
import { ConfigurationOptionWhereInputObjectSchema as ConfigurationOptionWhereInputObjectSchema } from './objects/ConfigurationOptionWhereInput.schema';
import { ConfigurationOptionWhereUniqueInputObjectSchema as ConfigurationOptionWhereUniqueInputObjectSchema } from './objects/ConfigurationOptionWhereUniqueInput.schema';
import { ConfigurationOptionScalarFieldEnumSchema } from './enums/ConfigurationOptionScalarFieldEnum.schema';
import { ConfigurationValueFindManySchema } from './findManyConfigurationValue.schema';
import { ConfigurationOptionCountOutputTypeArgsObjectSchema as ConfigurationOptionCountOutputTypeArgsObjectSchema } from './objects/ConfigurationOptionCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ConfigurationOptionFindManySelectSchema: z.ZodType<Prisma.ConfigurationOptionSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    label: z.boolean().optional(),
    description: z.boolean().optional(),
    type: z.boolean().optional(),
    required: z.boolean().optional(),
    category: z.boolean().optional(),
    sortOrder: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    values: z.union([z.boolean(), z.lazy(() => ConfigurationValueFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => ConfigurationOptionCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.ConfigurationOptionSelect>;

export const ConfigurationOptionFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    label: z.boolean().optional(),
    description: z.boolean().optional(),
    type: z.boolean().optional(),
    required: z.boolean().optional(),
    category: z.boolean().optional(),
    sortOrder: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    values: z.union([z.boolean(), z.lazy(() => ConfigurationValueFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => ConfigurationOptionCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const ConfigurationOptionFindManySchema: z.ZodType<Prisma.ConfigurationOptionFindManyArgs> = z.object({ select: ConfigurationOptionFindManySelectSchema.optional(), include: z.lazy(() => ConfigurationOptionIncludeObjectSchema.optional()), orderBy: z.union([ConfigurationOptionOrderByWithRelationInputObjectSchema, ConfigurationOptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ConfigurationOptionWhereInputObjectSchema.optional(), cursor: ConfigurationOptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ConfigurationOptionScalarFieldEnumSchema, ConfigurationOptionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ConfigurationOptionFindManyArgs>;

export const ConfigurationOptionFindManyZodSchema = z.object({ select: ConfigurationOptionFindManySelectSchema.optional(), include: z.lazy(() => ConfigurationOptionIncludeObjectSchema.optional()), orderBy: z.union([ConfigurationOptionOrderByWithRelationInputObjectSchema, ConfigurationOptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ConfigurationOptionWhereInputObjectSchema.optional(), cursor: ConfigurationOptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ConfigurationOptionScalarFieldEnumSchema, ConfigurationOptionScalarFieldEnumSchema.array()]).optional() }).strict();