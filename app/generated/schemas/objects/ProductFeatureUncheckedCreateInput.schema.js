import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    productId: z.string(),
    label: z.string(),
    sortOrder: z.number().int().optional()
}).strict();
export const ProductFeatureUncheckedCreateInputObjectSchema = makeSchema();
export const ProductFeatureUncheckedCreateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductFeatureUncheckedCreateInput.schema.js.map