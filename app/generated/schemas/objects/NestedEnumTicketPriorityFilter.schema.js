import * as z from 'zod';
import { TicketPrioritySchema } from '../enums/TicketPriority.schema';
const nestedenumticketpriorityfilterSchema = z.object({
    equals: TicketPrioritySchema.optional(),
    in: TicketPrioritySchema.array().optional(),
    notIn: TicketPrioritySchema.array().optional(),
    not: z.union([TicketPrioritySchema, z.lazy(() => NestedEnumTicketPriorityFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumTicketPriorityFilterObjectSchema = nestedenumticketpriorityfilterSchema;
export const NestedEnumTicketPriorityFilterObjectZodSchema = nestedenumticketpriorityfilterSchema;
//# sourceMappingURL=NestedEnumTicketPriorityFilter.schema.js.map