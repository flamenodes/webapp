import * as z from 'zod';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';
import { NestedEnumTicketStatusFilterObjectSchema as NestedEnumTicketStatusFilterObjectSchema } from './NestedEnumTicketStatusFilter.schema';
const makeSchema = () => z.object({
    equals: TicketStatusSchema.optional(),
    in: TicketStatusSchema.array().optional(),
    notIn: TicketStatusSchema.array().optional(),
    not: z.union([TicketStatusSchema, z.lazy(() => NestedEnumTicketStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumTicketStatusFilterObjectSchema = makeSchema();
export const EnumTicketStatusFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumTicketStatusFilter.schema.js.map