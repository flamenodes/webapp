import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema as NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { CartUpdateOneWithoutUserNestedInputObjectSchema as CartUpdateOneWithoutUserNestedInputObjectSchema } from './CartUpdateOneWithoutUserNestedInput.schema';
import { NotificationUpdateManyWithoutUserNestedInputObjectSchema as NotificationUpdateManyWithoutUserNestedInputObjectSchema } from './NotificationUpdateManyWithoutUserNestedInput.schema';
import { OrderUpdateManyWithoutUserNestedInputObjectSchema as OrderUpdateManyWithoutUserNestedInputObjectSchema } from './OrderUpdateManyWithoutUserNestedInput.schema';
import { ServerUpdateManyWithoutUserNestedInputObjectSchema as ServerUpdateManyWithoutUserNestedInputObjectSchema } from './ServerUpdateManyWithoutUserNestedInput.schema';
import { TicketUpdateManyWithoutAssignedToNestedInputObjectSchema as TicketUpdateManyWithoutAssignedToNestedInputObjectSchema } from './TicketUpdateManyWithoutAssignedToNestedInput.schema';
import { TicketUpdateManyWithoutUserNestedInputObjectSchema as TicketUpdateManyWithoutUserNestedInputObjectSchema } from './TicketUpdateManyWithoutUserNestedInput.schema';
import { TicketMessageUpdateManyWithoutSenderNestedInputObjectSchema as TicketMessageUpdateManyWithoutSenderNestedInputObjectSchema } from './TicketMessageUpdateManyWithoutSenderNestedInput.schema';
import { BillingAddressUpdateOneWithoutUserNestedInputObjectSchema as BillingAddressUpdateOneWithoutUserNestedInputObjectSchema } from './BillingAddressUpdateOneWithoutUserNestedInput.schema';
import { SessionUpdateManyWithoutUserNestedInputObjectSchema as SessionUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUpdateManyWithoutUserNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  emailVerified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time"), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time"), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  banExpires: z.union([z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time"), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  banReason: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  banned: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  displayUsername: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  firstname: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastname: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  username: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  clientId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  pteroUserId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  cart: z.lazy(() => CartUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  notifications: z.lazy(() => NotificationUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  servers: z.lazy(() => ServerUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  assignedTickets: z.lazy(() => TicketUpdateManyWithoutAssignedToNestedInputObjectSchema).optional(),
  tickets: z.lazy(() => TicketUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  ticketMessages: z.lazy(() => TicketMessageUpdateManyWithoutSenderNestedInputObjectSchema).optional(),
  billingAddress: z.lazy(() => BillingAddressUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateWithoutAccountsInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutAccountsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithoutAccountsInput>;
export const UserUpdateWithoutAccountsInputObjectZodSchema = makeSchema();
