import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SenderRoleSchema } from '../enums/SenderRole.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { TicketCreateNestedOneWithoutMessagesInputObjectSchema as TicketCreateNestedOneWithoutMessagesInputObjectSchema } from './TicketCreateNestedOneWithoutMessagesInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  senderRole: SenderRoleSchema,
  content: z.string(),
  attachments: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  ticket: z.lazy(() => TicketCreateNestedOneWithoutMessagesInputObjectSchema)
}).strict();
export const TicketMessageCreateWithoutSenderInputObjectSchema: z.ZodType<Prisma.TicketMessageCreateWithoutSenderInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageCreateWithoutSenderInput>;
export const TicketMessageCreateWithoutSenderInputObjectZodSchema = makeSchema();
