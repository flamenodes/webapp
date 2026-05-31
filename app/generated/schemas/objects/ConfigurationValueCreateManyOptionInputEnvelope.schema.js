import * as z from 'zod';
import { ConfigurationValueCreateManyOptionInputObjectSchema as ConfigurationValueCreateManyOptionInputObjectSchema } from './ConfigurationValueCreateManyOptionInput.schema';
const makeSchema = () => z.object({
    data: z.union([z.lazy(() => ConfigurationValueCreateManyOptionInputObjectSchema), z.lazy(() => ConfigurationValueCreateManyOptionInputObjectSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export const ConfigurationValueCreateManyOptionInputEnvelopeObjectSchema = makeSchema();
export const ConfigurationValueCreateManyOptionInputEnvelopeObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationValueCreateManyOptionInputEnvelope.schema.js.map