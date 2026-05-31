import * as z from 'zod';
import { TicketMessageCreateManySenderInputObjectSchema as TicketMessageCreateManySenderInputObjectSchema } from './TicketMessageCreateManySenderInput.schema';
const makeSchema = () => z.object({
    data: z.union([z.lazy(() => TicketMessageCreateManySenderInputObjectSchema), z.lazy(() => TicketMessageCreateManySenderInputObjectSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export const TicketMessageCreateManySenderInputEnvelopeObjectSchema = makeSchema();
export const TicketMessageCreateManySenderInputEnvelopeObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketMessageCreateManySenderInputEnvelope.schema.js.map