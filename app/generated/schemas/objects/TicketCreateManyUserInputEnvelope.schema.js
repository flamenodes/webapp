import * as z from 'zod';
import { TicketCreateManyUserInputObjectSchema as TicketCreateManyUserInputObjectSchema } from './TicketCreateManyUserInput.schema';
const makeSchema = () => z.object({
    data: z.union([z.lazy(() => TicketCreateManyUserInputObjectSchema), z.lazy(() => TicketCreateManyUserInputObjectSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export const TicketCreateManyUserInputEnvelopeObjectSchema = makeSchema();
export const TicketCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketCreateManyUserInputEnvelope.schema.js.map