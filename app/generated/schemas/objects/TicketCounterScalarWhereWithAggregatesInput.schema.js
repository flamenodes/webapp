import * as z from 'zod';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
const ticketcounterscalarwherewithaggregatesinputSchema = z.object({
    AND: z.union([z.lazy(() => TicketCounterScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TicketCounterScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
    OR: z.lazy(() => TicketCounterScalarWhereWithAggregatesInputObjectSchema).array().optional(),
    NOT: z.union([z.lazy(() => TicketCounterScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TicketCounterScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    seq: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const TicketCounterScalarWhereWithAggregatesInputObjectSchema = ticketcounterscalarwherewithaggregatesinputSchema;
export const TicketCounterScalarWhereWithAggregatesInputObjectZodSchema = ticketcounterscalarwherewithaggregatesinputSchema;
//# sourceMappingURL=TicketCounterScalarWhereWithAggregatesInput.schema.js.map