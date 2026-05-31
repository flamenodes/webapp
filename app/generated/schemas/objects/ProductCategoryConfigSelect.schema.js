import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.boolean().optional(),
    category: z.boolean().optional(),
    billingPeriods: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
}).strict();
export const ProductCategoryConfigSelectObjectSchema = makeSchema();
export const ProductCategoryConfigSelectObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductCategoryConfigSelect.schema.js.map