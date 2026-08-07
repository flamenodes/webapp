import * as z from 'zod';
// prettier-ignore
export const ConfigurationValueModelSchema = z.object({
    id: z.string(),
    optionId: z.string(),
    option: z.any(),
    label: z.string(),
    value: z.string(),
    description: z.string().nullable(),
    priceModifier: z.number().int(),
    metadata: z.any().nullable(),
    sortOrder: z.number().int(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}).strict();

export type ConfigurationValuePureType = z.infer<typeof ConfigurationValueModelSchema>;
