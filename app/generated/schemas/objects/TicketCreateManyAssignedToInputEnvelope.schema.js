import * as z from 'zod';
import { TicketCreateManyAssignedToInputObjectSchema as TicketCreateManyAssignedToInputObjectSchema } from './TicketCreateManyAssignedToInput.schema';
const makeSchema = () => z.object({
    data: z.union([z.lazy(() => TicketCreateManyAssignedToInputObjectSchema), z.lazy(() => TicketCreateManyAssignedToInputObjectSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export const TicketCreateManyAssignedToInputEnvelopeObjectSchema = makeSchema();
export const TicketCreateManyAssignedToInputEnvelopeObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketCreateManyAssignedToInputEnvelope.schema.js.map