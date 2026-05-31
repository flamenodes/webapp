import * as z from 'zod';
// prettier-ignore
export const ConfigurationValueResultSchema = z.object({
    id: z.string(),
    optionId: z.string(),
    option: z.unknown(),
    label: z.string(),
    value: z.string(),
    description: z.string().nullable(),
    priceModifier: z.number().int(),
    metadata: z.unknown().nullable(),
    sortOrder: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ConfigurationValueResultType = z.infer<typeof ConfigurationValueResultSchema>;
