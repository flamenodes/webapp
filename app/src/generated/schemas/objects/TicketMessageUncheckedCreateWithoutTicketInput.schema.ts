import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SenderRoleSchema } from '../enums/SenderRole.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  senderId: z.string(),
  senderRole: SenderRoleSchema,
  content: z.string(),
  attachments: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional()
}).strict();
export const TicketMessageUncheckedCreateWithoutTicketInputObjectSchema: z.ZodType<Prisma.TicketMessageUncheckedCreateWithoutTicketInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageUncheckedCreateWithoutTicketInput>;
export const TicketMessageUncheckedCreateWithoutTicketInputObjectZodSchema = makeSchema();
