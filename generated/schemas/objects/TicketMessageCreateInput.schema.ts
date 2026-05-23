import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { SenderRoleSchema } from '../enums/SenderRole.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { TicketCreateNestedOneWithoutMessagesInputObjectSchema as TicketCreateNestedOneWithoutMessagesInputObjectSchema } from './TicketCreateNestedOneWithoutMessagesInput.schema';
import { UserCreateNestedOneWithoutTicketMessagesInputObjectSchema as UserCreateNestedOneWithoutTicketMessagesInputObjectSchema } from './UserCreateNestedOneWithoutTicketMessagesInput.schema'

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
export const TicketMessageCreateInputObjectSchema: z.ZodType<Prisma.TicketMessageCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageCreateInput>;
export const TicketMessageCreateInputObjectZodSchema = makeSchema();
