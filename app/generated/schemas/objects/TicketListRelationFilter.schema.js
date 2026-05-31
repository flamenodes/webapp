import * as z from 'zod';
import { TicketWhereInputObjectSchema as TicketWhereInputObjectSchema } from './TicketWhereInput.schema';
const makeSchema = () => z.object({
    every: z.lazy(() => TicketWhereInputObjectSchema).optional(),
    some: z.lazy(() => TicketWhereInputObjectSchema).optional(),
    none: z.lazy(() => TicketWhereInputObjectSchema).optional()
}).strict();
export const TicketListRelationFilterObjectSchema = makeSchema();
export const TicketListRelationFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketListRelationFilter.schema.js.map