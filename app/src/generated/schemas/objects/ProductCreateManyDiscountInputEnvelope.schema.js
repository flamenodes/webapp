import * as z from 'zod';
import { ProductCreateManyDiscountInputObjectSchema as ProductCreateManyDiscountInputObjectSchema } from './ProductCreateManyDiscountInput.schema';
const makeSchema = () => z.object({
    data: z.union([z.lazy(() => ProductCreateManyDiscountInputObjectSchema), z.lazy(() => ProductCreateManyDiscountInputObjectSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export const ProductCreateManyDiscountInputEnvelopeObjectSchema = makeSchema();
export const ProductCreateManyDiscountInputEnvelopeObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductCreateManyDiscountInputEnvelope.schema.js.map