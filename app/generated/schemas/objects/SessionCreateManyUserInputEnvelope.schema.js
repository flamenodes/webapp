import * as z from 'zod';
import { SessionCreateManyUserInputObjectSchema as SessionCreateManyUserInputObjectSchema } from './SessionCreateManyUserInput.schema';
const makeSchema = () => z.object({
    data: z.union([z.lazy(() => SessionCreateManyUserInputObjectSchema), z.lazy(() => SessionCreateManyUserInputObjectSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export const SessionCreateManyUserInputEnvelopeObjectSchema = makeSchema();
export const SessionCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
//# sourceMappingURL=SessionCreateManyUserInputEnvelope.schema.js.map