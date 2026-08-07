import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumSenderRoleFilterObjectSchema as EnumSenderRoleFilterObjectSchema } from './EnumSenderRoleFilter.schema';
import { SenderRoleSchema } from '../enums/SenderRole.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { TicketScalarRelationFilterObjectSchema as TicketScalarRelationFilterObjectSchema } from './TicketScalarRelationFilter.schema';
import { TicketWhereInputObjectSchema as TicketWhereInputObjectSchema } from './TicketWhereInput.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const ticketmessagewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TicketMessageWhereInputObjectSchema), z.lazy(() => TicketMessageWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TicketMessageWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TicketMessageWhereInputObjectSchema), z.lazy(() => TicketMessageWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  ticketId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  senderId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  senderRole: z.union([z.lazy(() => EnumSenderRoleFilterObjectSchema), SenderRoleSchema]).optional(),
  content: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  attachments: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional(),
  ticket: z.union([z.lazy(() => TicketScalarRelationFilterObjectSchema), z.lazy(() => TicketWhereInputObjectSchema)]).optional(),
  sender: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const TicketMessageWhereInputObjectSchema: z.ZodType<Prisma.TicketMessageWhereInput> = ticketmessagewhereinputSchema as unknown as z.ZodType<Prisma.TicketMessageWhereInput>;
export const TicketMessageWhereInputObjectZodSchema = ticketmessagewhereinputSchema;
