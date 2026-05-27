import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TicketCountOrderByAggregateInputObjectSchema as TicketCountOrderByAggregateInputObjectSchema } from './TicketCountOrderByAggregateInput.schema';
import { TicketMaxOrderByAggregateInputObjectSchema as TicketMaxOrderByAggregateInputObjectSchema } from './TicketMaxOrderByAggregateInput.schema';
import { TicketMinOrderByAggregateInputObjectSchema as TicketMinOrderByAggregateInputObjectSchema } from './TicketMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  ticketId: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  priority: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  assignedToId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  channelName: SortOrderSchema.optional(),
  tags: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  closedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => TicketCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TicketMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TicketMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TicketOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TicketOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketOrderByWithAggregationInput>;
export const TicketOrderByWithAggregationInputObjectZodSchema = makeSchema();
