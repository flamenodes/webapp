import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SenderRoleSchema } from '../enums/SenderRole.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  senderId: z.string(),
  senderRole: SenderRoleSchema,
  content: z.string(),
  attachments: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const TicketMessageCreateManyTicketInputObjectSchema: z.ZodType<Prisma.TicketMessageCreateManyTicketInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageCreateManyTicketInput>;
export const TicketMessageCreateManyTicketInputObjectZodSchema = makeSchema();
