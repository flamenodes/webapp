import * as z from 'zod';
export const ConfigurationOptionUpdateResultSchema = z.nullable(z.object({
    id: z.string(),
    name: z.string(),
    label: z.string(),
    description: z.string().optional(),
    type: z.unknown(),
    required: z.boolean(),
    category: z.unknown(),
    sortOrder: z.number().int(),
    values: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}));
//# sourceMappingURL=ConfigurationOptionUpdateResult.schema.js.map