import * as z from 'zod';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumTicketStatusFilterObjectSchema as NestedEnumTicketStatusFilterObjectSchema } from './NestedEnumTicketStatusFilter.schema';
const nestedenumticketstatuswithaggregatesfilterSchema = z.object({
    equals: TicketStatusSchema.optional(),
    in: TicketStatusSchema.array().optional(),
    notIn: TicketStatusSchema.array().optional(),
    not: z.union([TicketStatusSchema, z.lazy(() => NestedEnumTicketStatusWithAggregatesFilterObjectSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumTicketStatusFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumTicketStatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumTicketStatusWithAggregatesFilterObjectSchema = nestedenumticketstatuswithaggregatesfilterSchema;
export const NestedEnumTicketStatusWithAggregatesFilterObjectZodSchema = nestedenumticketstatuswithaggregatesfilterSchema;
//# sourceMappingURL=NestedEnumTicketStatusWithAggregatesFilter.schema.js.map