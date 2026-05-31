import * as z from 'zod';
// prettier-ignore
export const ConfigurationValueModelSchema = z.object({
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

export type ConfigurationValuePureType = z.infer<typeof ConfigurationValueModelSchema>;
