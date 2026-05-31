import * as z from 'zod';
import { OrderItemCreateManyOrderInputObjectSchema as OrderItemCreateManyOrderInputObjectSchema } from './OrderItemCreateManyOrderInput.schema';
const makeSchema = () => z.object({
    data: z.union([z.lazy(() => OrderItemCreateManyOrderInputObjectSchema), z.lazy(() => OrderItemCreateManyOrderInputObjectSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export const OrderItemCreateManyOrderInputEnvelopeObjectSchema = makeSchema();
export const OrderItemCreateManyOrderInputEnvelopeObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderItemCreateManyOrderInputEnvelope.schema.js.map