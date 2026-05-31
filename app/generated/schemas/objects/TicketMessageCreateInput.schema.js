import * as z from 'zod';
import { SenderRoleSchema } from '../enums/SenderRole.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { TicketCreateNestedOneWithoutMessagesInputObjectSchema as TicketCreateNestedOneWithoutMessagesInputObjectSchema } from './TicketCreateNestedOneWithoutMessagesInput.schema';
import { UserCreateNestedOneWithoutTicketMessagesInputObjectSchema as UserCreateNestedOneWithoutTicketMessagesInputObjectSchema } from './UserCreateNestedOneWithoutTicketMessagesInput.schema';
import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';
const makeSchema = () => z.object({
    id: z.string().optional(),
    senderRole: SenderRoleSchema,
    content: z.string(),
    attachments: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
    createdAt: z.coerce.date().optional(),
    ticket: z.lazy(() => TicketCreateNestedOneWithoutMessagesInputObjectSchema),
    sender: z.lazy(() => UserCreateNestedOneWithoutTicketMessagesInputObjectSchema)
}).strict();
export const TicketMessageCreateInputObjectSchema = makeSchema();
export const TicketMessageCreateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketMessageCreateInput.schema.js.map