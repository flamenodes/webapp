import * as z from 'zod';
import { TicketMessageWhereInputObjectSchema as TicketMessageWhereInputObjectSchema } from './TicketMessageWhereInput.schema';
const makeSchema = () => z.object({
    every: z.lazy(() => TicketMessageWhereInputObjectSchema).optional(),
    some: z.lazy(() => TicketMessageWhereInputObjectSchema).optional(),
    none: z.lazy(() => TicketMessageWhereInputObjectSchema).optional()
}).strict();
export const TicketMessageListRelationFilterObjectSchema = makeSchema();
export const TicketMessageListRelationFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketMessageListRelationFilter.schema.js.map