import * as z from 'zod';
import { ConfigurationOptionIncludeObjectSchema as ConfigurationOptionIncludeObjectSchema } from './objects/ConfigurationOptionInclude.schema';
import { ConfigurationOptionOrderByWithRelationInputObjectSchema as ConfigurationOptionOrderByWithRelationInputObjectSchema } from './objects/ConfigurationOptionOrderByWithRelationInput.schema';
import { ConfigurationOptionWhereInputObjectSchema as ConfigurationOptionWhereInputObjectSchema } from './objects/ConfigurationOptionWhereInput.schema';
import { ConfigurationOptionWhereUniqueInputObjectSchema as ConfigurationOptionWhereUniqueInputObjectSchema } from './objects/ConfigurationOptionWhereUniqueInput.schema';
import { ConfigurationOptionScalarFieldEnumSchema } from './enums/ConfigurationOptionScalarFieldEnum.schema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const ConfigurationOptionFindManySelectSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    label: z.boolean().optional(),
    description: z.boolean().optional(),
    type: z.boolean().optional(),
    required: z.boolean().optional(),
    category: z.boolean().optional(),
    sortOrder: z.boolean().optional(),
    values: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
}).strict();
export const ConfigurationOptionFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    label: z.boolean().optional(),
    description: z.boolean().optional(),
    type: z.boolean().optional(),
    required: z.boolean().optional(),
    category: z.boolean().optional(),
    sortOrder: z.boolean().optional(),
    values: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
}).strict();
export const ConfigurationOptionFindManySchema = z.object({ select: ConfigurationOptionFindManySelectSchema.optional(), include: z.lazy(() => ConfigurationOptionIncludeObjectSchema.optional()), orderBy: z.union([ConfigurationOptionOrderByWithRelationInputObjectSchema, ConfigurationOptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ConfigurationOptionWhereInputObjectSchema.optional(), cursor: ConfigurationOptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ConfigurationOptionScalarFieldEnumSchema, ConfigurationOptionScalarFieldEnumSchema.array()]).optional() }).strict();
export const ConfigurationOptionFindManyZodSchema = z.object({ select: ConfigurationOptionFindManySelectSchema.optional(), include: z.lazy(() => ConfigurationOptionIncludeObjectSchema.optional()), orderBy: z.union([ConfigurationOptionOrderByWithRelationInputObjectSchema, ConfigurationOptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ConfigurationOptionWhereInputObjectSchema.optional(), cursor: ConfigurationOptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ConfigurationOptionScalarFieldEnumSchema, ConfigurationOptionScalarFieldEnumSchema.array()]).optional() }).strict();
//# sourceMappingURL=findManyConfigurationOption.schema.js.map