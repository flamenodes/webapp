import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SenderRoleSchema } from '../enums/SenderRole.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { TicketCreateNestedOneWithoutMessagesInputObjectSchema as TicketCreateNestedOneWithoutMessagesInputObjectSchema } from './TicketCreateNestedOneWithoutMessagesInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  senderRole: SenderRoleSchema,
  content: z.string(),
  attachments: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional(),
  ticket: z.lazy(() => TicketCreateNestedOneWithoutMessagesInputObjectSchema)
}).strict();
export const TicketMessageCreateWithoutSenderInputObjectSchema: z.ZodType<Prisma.TicketMessageCreateWithoutSenderInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageCreateWithoutSenderInput>;
export const TicketMessageCreateWithoutSenderInputObjectZodSchema = makeSchema();
