import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumSenderRoleFilterObjectSchema as EnumSenderRoleFilterObjectSchema } from './EnumSenderRoleFilter.schema';
import { SenderRoleSchema } from '../enums/SenderRole.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const ticketmessagescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TicketMessageScalarWhereInputObjectSchema), z.lazy(() => TicketMessageScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TicketMessageScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TicketMessageScalarWhereInputObjectSchema), z.lazy(() => TicketMessageScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  ticketId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  senderId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  senderRole: z.union([z.lazy(() => EnumSenderRoleFilterObjectSchema), SenderRoleSchema]).optional(),
  content: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  attachments: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const TicketMessageScalarWhereInputObjectSchema: z.ZodType<Prisma.TicketMessageScalarWhereInput> = ticketmessagescalarwhereinputSchema as unknown as z.ZodType<Prisma.TicketMessageScalarWhereInput>;
export const TicketMessageScalarWhereInputObjectZodSchema = ticketmessagescalarwhereinputSchema;
