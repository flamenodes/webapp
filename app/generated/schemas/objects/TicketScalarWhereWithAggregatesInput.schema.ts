import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumTicketStatusWithAggregatesFilterObjectSchema as EnumTicketStatusWithAggregatesFilterObjectSchema } from './EnumTicketStatusWithAggregatesFilter.schema';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';
import { EnumTicketPriorityWithAggregatesFilterObjectSchema as EnumTicketPriorityWithAggregatesFilterObjectSchema } from './EnumTicketPriorityWithAggregatesFilter.schema';
import { TicketPrioritySchema } from '../enums/TicketPriority.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const ticketscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TicketScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TicketScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TicketScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TicketScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TicketScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  ticketId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumTicketStatusWithAggregatesFilterObjectSchema), TicketStatusSchema]).optional(),
  priority: z.union([z.lazy(() => EnumTicketPriorityWithAggregatesFilterObjectSchema), TicketPrioritySchema]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  assignedToId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  channelName: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  tags: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  closedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const TicketScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TicketScalarWhereWithAggregatesInput> = ticketscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TicketScalarWhereWithAggregatesInput>;
export const TicketScalarWhereWithAggregatesInputObjectZodSchema = ticketscalarwherewithaggregatesinputSchema;
