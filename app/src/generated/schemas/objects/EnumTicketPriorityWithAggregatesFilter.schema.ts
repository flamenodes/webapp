import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { TicketPrioritySchema } from '../enums/TicketPriority.schema';
import { NestedEnumTicketPriorityWithAggregatesFilterObjectSchema as NestedEnumTicketPriorityWithAggregatesFilterObjectSchema } from './NestedEnumTicketPriorityWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumTicketPriorityFilterObjectSchema as NestedEnumTicketPriorityFilterObjectSchema } from './NestedEnumTicketPriorityFilter.schema'

const makeSchema = () => z.object({
  equals: TicketPrioritySchema.optional(),
  in: TicketPrioritySchema.array().optional(),
  notIn: TicketPrioritySchema.array().optional(),
  not: z.union([TicketPrioritySchema, z.lazy(() => NestedEnumTicketPriorityWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumTicketPriorityFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumTicketPriorityFilterObjectSchema).optional()
}).strict();
export const EnumTicketPriorityWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumTicketPriorityWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumTicketPriorityWithAggregatesFilter>;
export const EnumTicketPriorityWithAggregatesFilterObjectZodSchema = makeSchema();
