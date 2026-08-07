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
export const TicketMessageUncheckedCreateWithoutTicketInputObjectSchema: z.ZodType<Prisma.TicketMessageUncheckedCreateWithoutTicketInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageUncheckedCreateWithoutTicketInput>;
export const TicketMessageUncheckedCreateWithoutTicketInputObjectZodSchema = makeSchema();
