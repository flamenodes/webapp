import * as z from 'zod';
import { SenderRoleSchema } from '../enums/SenderRole.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';
const makeSchema = () => z.object({
    id: z.string().optional(),
    senderId: z.string(),
    senderRole: SenderRoleSchema,
    content: z.string(),
    attachments: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
    createdAt: z.coerce.date().optional()
}).strict();
export const TicketMessageUncheckedCreateWithoutTicketInputObjectSchema = makeSchema();
export const TicketMessageUncheckedCreateWithoutTicketInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketMessageUncheckedCreateWithoutTicketInput.schema.js.map