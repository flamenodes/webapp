import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    label: z.string(),
    sortOrder: z.number().int().optional()
}).strict();
export const ProductFeatureCreateWithoutProductInputObjectSchema = makeSchema();
export const ProductFeatureCreateWithoutProductInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductFeatureCreateWithoutProductInput.schema.js.map