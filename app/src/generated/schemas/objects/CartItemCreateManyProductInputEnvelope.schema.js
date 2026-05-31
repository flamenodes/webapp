import * as z from 'zod';
import { CartItemCreateManyProductInputObjectSchema as CartItemCreateManyProductInputObjectSchema } from './CartItemCreateManyProductInput.schema';
const makeSchema = () => z.object({
    data: z.union([z.lazy(() => CartItemCreateManyProductInputObjectSchema), z.lazy(() => CartItemCreateManyProductInputObjectSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export const CartItemCreateManyProductInputEnvelopeObjectSchema = makeSchema();
export const CartItemCreateManyProductInputEnvelopeObjectZodSchema = makeSchema();
//# sourceMappingURL=CartItemCreateManyProductInputEnvelope.schema.js.map