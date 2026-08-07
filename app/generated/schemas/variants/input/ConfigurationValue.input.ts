import * as z from 'zod';
// prettier-ignore
export const ConfigurationValueInputSchema = z.object({
    id: z.string(),
    optionId: z.string(),
    option: z.unknown(),
    label: z.string(),
    value: z.string(),
    description: z.string().optional().nullable(),
    priceModifier: z.number().int(),
    metadata: z.unknown().optional().nullable(),
    sortOrder: z.number().int(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
}).strict();

export type ConfigurationValueInputType = z.infer<typeof ConfigurationValueInputSchema>;
