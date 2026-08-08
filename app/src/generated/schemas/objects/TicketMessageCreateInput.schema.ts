import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SenderRoleSchema } from '../enums/SenderRole.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { UserCreateNestedOneWithoutTicketMessagesInputObjectSchema as UserCreateNestedOneWithoutTicketMessagesInputObjectSchema } from './UserCreateNestedOneWithoutTicketMessagesInput.schema';
import { TicketCreateNestedOneWithoutMessagesInputObjectSchema as TicketCreateNestedOneWithoutMessagesInputObjectSchema } from './TicketCreateNestedOneWithoutMessagesInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  senderRole: SenderRoleSchema,
  content: z.string(),
  attachments: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  sender: z.lazy(() => UserCreateNestedOneWithoutTicketMessagesInputObjectSchema),
  ticket: z.lazy(() => TicketCreateNestedOneWithoutMessagesInputObjectSchema)
}).strict();
export const TicketMessageCreateInputObjectSchema: z.ZodType<Prisma.TicketMessageCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageCreateInput>;
export const TicketMessageCreateInputObjectZodSchema = makeSchema();
