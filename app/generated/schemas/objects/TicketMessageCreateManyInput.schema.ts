import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SenderRoleSchema } from '../enums/SenderRole.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  ticketId: z.string(),
  senderId: z.string(),
  senderRole: SenderRoleSchema,
  content: z.string(),
  attachments: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const TicketMessageCreateManyInputObjectSchema: z.ZodType<Prisma.TicketMessageCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageCreateManyInput>;
export const TicketMessageCreateManyInputObjectZodSchema = makeSchema();
