import * as z from 'zod';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
const ticketcounterwhereinputSchema = z.object({
    AND: z.union([z.lazy(() => TicketCounterWhereInputObjectSchema), z.lazy(() => TicketCounterWhereInputObjectSchema).array()]).optional(),
    OR: z.lazy(() => TicketCounterWhereInputObjectSchema).array().optional(),
    NOT: z.union([z.lazy(() => TicketCounterWhereInputObjectSchema), z.lazy(() => TicketCounterWhereInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    seq: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const TicketCounterWhereInputObjectSchema = ticketcounterwhereinputSchema;
export const TicketCounterWhereInputObjectZodSchema = ticketcounterwhereinputSchema;
//# sourceMappingURL=TicketCounterWhereInput.schema.js.map