import * as z from 'zod';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumSenderRoleWithAggregatesFilterObjectSchema as EnumSenderRoleWithAggregatesFilterObjectSchema } from './EnumSenderRoleWithAggregatesFilter.schema';
import { SenderRoleSchema } from '../enums/SenderRole.schema';
import { JsonNullableWithAggregatesFilterObjectSchema as JsonNullableWithAggregatesFilterObjectSchema } from './JsonNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
const ticketmessagescalarwherewithaggregatesinputSchema = z.object({
    AND: z.union([z.lazy(() => TicketMessageScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TicketMessageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
    OR: z.lazy(() => TicketMessageScalarWhereWithAggregatesInputObjectSchema).array().optional(),
    NOT: z.union([z.lazy(() => TicketMessageScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TicketMessageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    ticketId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    senderId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    senderRole: z.union([z.lazy(() => EnumSenderRoleWithAggregatesFilterObjectSchema), SenderRoleSchema]).optional(),
    content: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    attachments: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
    createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const TicketMessageScalarWhereWithAggregatesInputObjectSchema = ticketmessagescalarwherewithaggregatesinputSchema;
export const TicketMessageScalarWhereWithAggregatesInputObjectZodSchema = ticketmessagescalarwherewithaggregatesinputSchema;
//# sourceMappingURL=TicketMessageScalarWhereWithAggregatesInput.schema.js.map