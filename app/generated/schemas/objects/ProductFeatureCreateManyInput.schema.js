import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    productId: z.string(),
    label: z.string(),
    sortOrder: z.number().int().optional()
}).strict();
export const ProductFeatureCreateManyInputObjectSchema = makeSchema();
export const ProductFeatureCreateManyInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductFeatureCreateManyInput.schema.js.map