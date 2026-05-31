import * as z from 'zod';
import { ServerCreateManyUserInputObjectSchema as ServerCreateManyUserInputObjectSchema } from './ServerCreateManyUserInput.schema';
const makeSchema = () => z.object({
    data: z.union([z.lazy(() => ServerCreateManyUserInputObjectSchema), z.lazy(() => ServerCreateManyUserInputObjectSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export const ServerCreateManyUserInputEnvelopeObjectSchema = makeSchema();
export const ServerCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
//# sourceMappingURL=ServerCreateManyUserInputEnvelope.schema.js.map