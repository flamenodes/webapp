import * as z from 'zod';
import { SenderRoleSchema } from '../enums/SenderRole.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { TicketCreateNestedOneWithoutMessagesInputObjectSchema as TicketCreateNestedOneWithoutMessagesInputObjectSchema } from './TicketCreateNestedOneWithoutMessagesInput.schema';
import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';
const makeSchema = () => z.object({
    id: z.string().optional(),
    senderRole: SenderRoleSchema,
    content: z.string(),
    attachments: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
    createdAt: z.coerce.date().optional(),
    ticket: z.lazy(() => TicketCreateNestedOneWithoutMessagesInputObjectSchema)
}).strict();
export const TicketMessageCreateWithoutSenderInputObjectSchema = makeSchema();
export const TicketMessageCreateWithoutSenderInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketMessageCreateWithoutSenderInput.schema.js.map