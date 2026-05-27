import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { TicketPrioritySchema } from '../enums/TicketPriority.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumTicketPriorityFilterObjectSchema as NestedEnumTicketPriorityFilterObjectSchema } from './NestedEnumTicketPriorityFilter.schema'

const nestedenumticketprioritywithaggregatesfilterSchema = z.object({
  equals: TicketPrioritySchema.optional(),
  in: TicketPrioritySchema.array().optional(),
  notIn: TicketPrioritySchema.array().optional(),
  not: z.union([TicketPrioritySchema, z.lazy(() => NestedEnumTicketPriorityWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumTicketPriorityFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumTicketPriorityFilterObjectSchema).optional()
}).strict();
export const NestedEnumTicketPriorityWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumTicketPriorityWithAggregatesFilter> = nestedenumticketprioritywithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumTicketPriorityWithAggregatesFilter>;
export const NestedEnumTicketPriorityWithAggregatesFilterObjectZodSchema = nestedenumticketprioritywithaggregatesfilterSchema;
