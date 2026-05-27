import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { SenderRoleSchema } from '../enums/SenderRole.schema';
import { EnumSenderRoleFieldUpdateOperationsInputObjectSchema as EnumSenderRoleFieldUpdateOperationsInputObjectSchema } from './EnumSenderRoleFieldUpdateOperationsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutTicketMessagesNestedInputObjectSchema as UserUpdateOneRequiredWithoutTicketMessagesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutTicketMessagesNestedInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  senderRole: z.union([SenderRoleSchema, z.lazy(() => EnumSenderRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  attachments: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  sender: z.lazy(() => UserUpdateOneRequiredWithoutTicketMessagesNestedInputObjectSchema).optional()
}).strict();
export const TicketMessageUpdateWithoutTicketInputObjectSchema: z.ZodType<Prisma.TicketMessageUpdateWithoutTicketInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageUpdateWithoutTicketInput>;
export const TicketMessageUpdateWithoutTicketInputObjectZodSchema = makeSchema();
