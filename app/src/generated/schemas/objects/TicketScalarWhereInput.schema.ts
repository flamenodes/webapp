import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumTicketStatusFilterObjectSchema as EnumTicketStatusFilterObjectSchema } from './EnumTicketStatusFilter.schema';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';
import { EnumTicketPriorityFilterObjectSchema as EnumTicketPriorityFilterObjectSchema } from './EnumTicketPriorityFilter.schema';
import { TicketPrioritySchema } from '../enums/TicketPriority.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const ticketscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TicketScalarWhereInputObjectSchema), z.lazy(() => TicketScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TicketScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TicketScalarWhereInputObjectSchema), z.lazy(() => TicketScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  ticketId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumTicketStatusFilterObjectSchema), TicketStatusSchema]).optional(),
  priority: z.union([z.lazy(() => EnumTicketPriorityFilterObjectSchema), TicketPrioritySchema]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  assignedToId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  channelName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tags: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional(),
  closedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional().nullable()
}).strict();
export const TicketScalarWhereInputObjectSchema: z.ZodType<Prisma.TicketScalarWhereInput> = ticketscalarwhereinputSchema as unknown as z.ZodType<Prisma.TicketScalarWhereInput>;
export const TicketScalarWhereInputObjectZodSchema = ticketscalarwhereinputSchema;
