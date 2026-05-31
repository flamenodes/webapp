import * as z from 'zod';
import { TicketWhereInputObjectSchema as TicketWhereInputObjectSchema } from './TicketWhereInput.schema';
const makeSchema = () => z.object({
    is: z.lazy(() => TicketWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => TicketWhereInputObjectSchema).optional()
}).strict();
export const TicketScalarRelationFilterObjectSchema = makeSchema();
export const TicketScalarRelationFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketScalarRelationFilter.schema.js.map