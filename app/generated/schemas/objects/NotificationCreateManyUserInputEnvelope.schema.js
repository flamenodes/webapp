import * as z from 'zod';
import { NotificationCreateManyUserInputObjectSchema as NotificationCreateManyUserInputObjectSchema } from './NotificationCreateManyUserInput.schema';
const makeSchema = () => z.object({
    data: z.union([z.lazy(() => NotificationCreateManyUserInputObjectSchema), z.lazy(() => NotificationCreateManyUserInputObjectSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export const NotificationCreateManyUserInputEnvelopeObjectSchema = makeSchema();
export const NotificationCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
//# sourceMappingURL=NotificationCreateManyUserInputEnvelope.schema.js.map