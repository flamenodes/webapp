import * as z from 'zod';
import { ConfigurationValueIncludeObjectSchema as ConfigurationValueIncludeObjectSchema } from './objects/ConfigurationValueInclude.schema';
import { ConfigurationValueOrderByWithRelationInputObjectSchema as ConfigurationValueOrderByWithRelationInputObjectSchema } from './objects/ConfigurationValueOrderByWithRelationInput.schema';
import { ConfigurationValueWhereInputObjectSchema as ConfigurationValueWhereInputObjectSchema } from './objects/ConfigurationValueWhereInput.schema';
import { ConfigurationValueWhereUniqueInputObjectSchema as ConfigurationValueWhereUniqueInputObjectSchema } from './objects/ConfigurationValueWhereUniqueInput.schema';
import { ConfigurationValueScalarFieldEnumSchema } from './enums/ConfigurationValueScalarFieldEnum.schema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const ConfigurationValueFindFirstSelectSchema = z.object({
    id: z.boolean().optional(),
    optionId: z.boolean().optional(),
    option: z.boolean().optional(),
    label: z.boolean().optional(),
    value: z.boolean().optional(),
    description: z.boolean().optional(),
    priceModifier: z.boolean().optional(),
    metadata: z.boolean().optional(),
    sortOrder: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
}).strict();
export const ConfigurationValueFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    optionId: z.boolean().optional(),
    option: z.boolean().optional(),
    label: z.boolean().optional(),
    value: z.boolean().optional(),
    description: z.boolean().optional(),
    priceModifier: z.boolean().optional(),
    metadata: z.boolean().optional(),
    sortOrder: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
}).strict();
export const ConfigurationValueFindFirstSchema = z.object({ select: ConfigurationValueFindFirstSelectSchema.optional(), include: z.lazy(() => ConfigurationValueIncludeObjectSchema.optional()), orderBy: z.union([ConfigurationValueOrderByWithRelationInputObjectSchema, ConfigurationValueOrderByWithRelationInputObjectSchema.array()]).optional(), where: ConfigurationValueWhereInputObjectSchema.optional(), cursor: ConfigurationValueWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ConfigurationValueScalarFieldEnumSchema, ConfigurationValueScalarFieldEnumSchema.array()]).optional() }).strict();
export const ConfigurationValueFindFirstZodSchema = z.object({ select: ConfigurationValueFindFirstSelectSchema.optional(), include: z.lazy(() => ConfigurationValueIncludeObjectSchema.optional()), orderBy: z.union([ConfigurationValueOrderByWithRelationInputObjectSchema, ConfigurationValueOrderByWithRelationInputObjectSchema.array()]).optional(), where: ConfigurationValueWhereInputObjectSchema.optional(), cursor: ConfigurationValueWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ConfigurationValueScalarFieldEnumSchema, ConfigurationValueScalarFieldEnumSchema.array()]).optional() }).strict();
//# sourceMappingURL=findFirstConfigurationValue.schema.js.map