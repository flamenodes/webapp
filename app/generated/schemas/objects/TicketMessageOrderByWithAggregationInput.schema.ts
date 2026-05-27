import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TicketMessageCountOrderByAggregateInputObjectSchema as TicketMessageCountOrderByAggregateInputObjectSchema } from './TicketMessageCountOrderByAggregateInput.schema';
import { TicketMessageMaxOrderByAggregateInputObjectSchema as TicketMessageMaxOrderByAggregateInputObjectSchema } from './TicketMessageMaxOrderByAggregateInput.schema';
import { TicketMessageMinOrderByAggregateInputObjectSchema as TicketMessageMinOrderByAggregateInputObjectSchema } from './TicketMessageMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  ticketId: SortOrderSchema.optional(),
  senderId: SortOrderSchema.optional(),
  senderRole: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  attachments: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => TicketMessageCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TicketMessageMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TicketMessageMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TicketMessageOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TicketMessageOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageOrderByWithAggregationInput>;
export const TicketMessageOrderByWithAggregationInputObjectZodSchema = makeSchema();
