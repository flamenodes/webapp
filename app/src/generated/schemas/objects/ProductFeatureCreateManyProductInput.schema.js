import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    label: z.string(),
    sortOrder: z.number().int().optional()
}).strict();
export const ProductFeatureCreateManyProductInputObjectSchema = makeSchema();
export const ProductFeatureCreateManyProductInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductFeatureCreateManyProductInput.schema.js.map