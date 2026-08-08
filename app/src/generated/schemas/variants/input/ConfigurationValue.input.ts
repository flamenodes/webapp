import * as z from 'zod';
// prettier-ignore
export const ConfigurationValueInputSchema = z.object({
    id: z.string(),
    optionId: z.string(),
    label: z.string(),
    value: z.string(),
    description: z.string().optional().nullable(),
    priceModifier: z.number().int(),
    metadata: z.any().optional().nullable(),
    sortOrder: z.number().int(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    option: z.any()
}).strict();

export type ConfigurationValueInputType = z.infer<typeof ConfigurationValueInputSchema>;
