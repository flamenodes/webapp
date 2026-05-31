import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    name: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional()
}).strict();
export const TicketTagPresetOrderByWithRelationInputObjectSchema = makeSchema();
export const TicketTagPresetOrderByWithRelationInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketTagPresetOrderByWithRelationInput.schema.js.map