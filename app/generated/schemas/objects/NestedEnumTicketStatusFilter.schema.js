import * as z from 'zod';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';
const nestedenumticketstatusfilterSchema = z.object({
    equals: TicketStatusSchema.optional(),
    in: TicketStatusSchema.array().optional(),
    notIn: TicketStatusSchema.array().optional(),
    not: z.union([TicketStatusSchema, z.lazy(() => NestedEnumTicketStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumTicketStatusFilterObjectSchema = nestedenumticketstatusfilterSchema;
export const NestedEnumTicketStatusFilterObjectZodSchema = nestedenumticketstatusfilterSchema;
//# sourceMappingURL=NestedEnumTicketStatusFilter.schema.js.map