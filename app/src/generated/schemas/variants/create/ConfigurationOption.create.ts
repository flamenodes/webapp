import * as z from 'zod';
import { ConfigurationOptionTypeSchema } from '../../enums/ConfigurationOptionType.schema';
import { ProductCategorySchema } from '../../enums/ProductCategory.schema';
// prettier-ignore
export const ConfigurationOptionCreateSchema = z.object({
    id: z.string(),
    name: z.string(),
    label: z.string(),
    description: z.string().nullable(),
    type: ConfigurationOptionTypeSchema,
    required: z.boolean(),
    category: ProductCategorySchema,
    sortOrder: z.number().int(),
    values: z.array(z.any()),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}).strict();

export type ConfigurationOptionCreateType = z.infer<typeof ConfigurationOptionCreateSchema>;
