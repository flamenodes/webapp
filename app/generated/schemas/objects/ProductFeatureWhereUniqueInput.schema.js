import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional()
}).strict();
export const ProductFeatureWhereUniqueInputObjectSchema = makeSchema();
export const ProductFeatureWhereUniqueInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductFeatureWhereUniqueInput.schema.js.map