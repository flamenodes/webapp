import * as z from 'zod';
import { TicketPrioritySchema } from '../enums/TicketPriority.schema';
import { NestedEnumTicketPriorityFilterObjectSchema as NestedEnumTicketPriorityFilterObjectSchema } from './NestedEnumTicketPriorityFilter.schema';
const makeSchema = () => z.object({
    equals: TicketPrioritySchema.optional(),
    in: TicketPrioritySchema.array().optional(),
    notIn: TicketPrioritySchema.array().optional(),
    not: z.union([TicketPrioritySchema, z.lazy(() => NestedEnumTicketPriorityFilterObjectSchema)]).optional()
}).strict();
export const EnumTicketPriorityFilterObjectSchema = makeSchema();
export const EnumTicketPriorityFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumTicketPriorityFilter.schema.js.map