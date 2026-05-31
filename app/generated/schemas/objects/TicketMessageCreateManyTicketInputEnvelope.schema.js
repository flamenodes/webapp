import * as z from 'zod';
import { TicketMessageCreateManyTicketInputObjectSchema as TicketMessageCreateManyTicketInputObjectSchema } from './TicketMessageCreateManyTicketInput.schema';
const makeSchema = () => z.object({
    data: z.union([z.lazy(() => TicketMessageCreateManyTicketInputObjectSchema), z.lazy(() => TicketMessageCreateManyTicketInputObjectSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export const TicketMessageCreateManyTicketInputEnvelopeObjectSchema = makeSchema();
export const TicketMessageCreateManyTicketInputEnvelopeObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketMessageCreateManyTicketInputEnvelope.schema.js.map