import * as z from 'zod';
export const ConfigurationValueGroupByResultSchema = z.array(z.object({
    id: z.string(),
    optionId: z.string(),
    label: z.string(),
    value: z.string(),
    description: z.string(),
    priceModifier: z.number().int(),
    metadata: z.unknown(),
    sortOrder: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    _count: z.object({
        id: z.number(),
        optionId: z.number(),
        option: z.number(),
        label: z.number(),
        value: z.number(),
        description: z.number(),
        priceModifier: z.number(),
        metadata: z.number(),
        sortOrder: z.number(),
        createdAt: z.number(),
        updatedAt: z.number()
    }).optional(),
    _sum: z.object({
        priceModifier: z.number().nullable(),
        sortOrder: z.number().nullable()
    }).nullable().optional(),
    _avg: z.object({
        priceModifier: z.number().nullable(),
        sortOrder: z.number().nullable()
    }).nullable().optional(),
    _min: z.object({
        id: z.string().nullable(),
        optionId: z.string().nullable(),
        label: z.string().nullable(),
        value: z.string().nullable(),
        description: z.string().nullable(),
        priceModifier: z.number().int().nullable(),
        sortOrder: z.number().int().nullable(),
        createdAt: z.date().nullable(),
        updatedAt: z.date().nullable()
    }).nullable().optional(),
    _max: z.object({
        id: z.string().nullable(),
        optionId: z.string().nullable(),
        label: z.string().nullable(),
        value: z.string().nullable(),
        description: z.string().nullable(),
        priceModifier: z.number().int().nullable(),
        sortOrder: z.number().int().nullable(),
        createdAt: z.date().nullable(),
        updatedAt: z.date().nullable()
    }).nullable().optional()
}));
//# sourceMappingURL=ConfigurationValueGroupByResult.schema.js.map