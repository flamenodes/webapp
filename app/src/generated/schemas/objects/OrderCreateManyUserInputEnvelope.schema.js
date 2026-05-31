import * as z from 'zod';
import { OrderCreateManyUserInputObjectSchema as OrderCreateManyUserInputObjectSchema } from './OrderCreateManyUserInput.schema';
const makeSchema = () => z.object({
    data: z.union([z.lazy(() => OrderCreateManyUserInputObjectSchema), z.lazy(() => OrderCreateManyUserInputObjectSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export const OrderCreateManyUserInputEnvelopeObjectSchema = makeSchema();
export const OrderCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderCreateManyUserInputEnvelope.schema.js.map