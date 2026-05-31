import * as z from 'zod';
import { ProductFeatureCreateManyProductInputObjectSchema as ProductFeatureCreateManyProductInputObjectSchema } from './ProductFeatureCreateManyProductInput.schema';
const makeSchema = () => z.object({
    data: z.union([z.lazy(() => ProductFeatureCreateManyProductInputObjectSchema), z.lazy(() => ProductFeatureCreateManyProductInputObjectSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export const ProductFeatureCreateManyProductInputEnvelopeObjectSchema = makeSchema();
export const ProductFeatureCreateManyProductInputEnvelopeObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductFeatureCreateManyProductInputEnvelope.schema.js.map