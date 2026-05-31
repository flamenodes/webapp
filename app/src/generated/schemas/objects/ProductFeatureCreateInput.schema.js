import * as z from 'zod';
import { ProductCreateNestedOneWithoutFeaturesInputObjectSchema as ProductCreateNestedOneWithoutFeaturesInputObjectSchema } from './ProductCreateNestedOneWithoutFeaturesInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    label: z.string(),
    sortOrder: z.number().int().optional(),
    product: z.lazy(() => ProductCreateNestedOneWithoutFeaturesInputObjectSchema)
}).strict();
export const ProductFeatureCreateInputObjectSchema = makeSchema();
export const ProductFeatureCreateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductFeatureCreateInput.schema.js.map