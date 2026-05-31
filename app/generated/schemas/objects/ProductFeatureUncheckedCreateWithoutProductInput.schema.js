import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    label: z.string(),
    sortOrder: z.number().int().optional()
}).strict();
export const ProductFeatureUncheckedCreateWithoutProductInputObjectSchema = makeSchema();
export const ProductFeatureUncheckedCreateWithoutProductInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductFeatureUncheckedCreateWithoutProductInput.schema.js.map