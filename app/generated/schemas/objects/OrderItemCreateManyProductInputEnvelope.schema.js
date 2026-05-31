import * as z from 'zod';
import { OrderItemCreateManyProductInputObjectSchema as OrderItemCreateManyProductInputObjectSchema } from './OrderItemCreateManyProductInput.schema';
const makeSchema = () => z.object({
    data: z.union([z.lazy(() => OrderItemCreateManyProductInputObjectSchema), z.lazy(() => OrderItemCreateManyProductInputObjectSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export const OrderItemCreateManyProductInputEnvelopeObjectSchema = makeSchema();
export const OrderItemCreateManyProductInputEnvelopeObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderItemCreateManyProductInputEnvelope.schema.js.map