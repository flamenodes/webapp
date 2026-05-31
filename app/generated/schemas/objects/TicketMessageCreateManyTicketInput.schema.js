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
export const TicketMessageCreateManyTicketInputObjectSchema = makeSchema();
export const TicketMessageCreateManyTicketInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketMessageCreateManyTicketInput.schema.js.map