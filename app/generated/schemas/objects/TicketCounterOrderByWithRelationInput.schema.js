import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    seq: SortOrderSchema.optional()
}).strict();
export const TicketCounterOrderByWithRelationInputObjectSchema = makeSchema();
export const TicketCounterOrderByWithRelationInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketCounterOrderByWithRelationInput.schema.js.map