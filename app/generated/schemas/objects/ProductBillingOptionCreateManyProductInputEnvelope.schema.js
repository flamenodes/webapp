import * as z from 'zod';
import { ProductBillingOptionCreateManyProductInputObjectSchema as ProductBillingOptionCreateManyProductInputObjectSchema } from './ProductBillingOptionCreateManyProductInput.schema';
const makeSchema = () => z.object({
    data: z.union([z.lazy(() => ProductBillingOptionCreateManyProductInputObjectSchema), z.lazy(() => ProductBillingOptionCreateManyProductInputObjectSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export const ProductBillingOptionCreateManyProductInputEnvelopeObjectSchema = makeSchema();
export const ProductBillingOptionCreateManyProductInputEnvelopeObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductBillingOptionCreateManyProductInputEnvelope.schema.js.map