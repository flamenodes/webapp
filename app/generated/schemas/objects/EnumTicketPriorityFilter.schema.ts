import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { TicketPrioritySchema } from '../enums/TicketPriority.schema';
import { NestedEnumTicketPriorityFilterObjectSchema as NestedEnumTicketPriorityFilterObjectSchema } from './NestedEnumTicketPriorityFilter.schema'

const makeSchema = () => z.object({
  equals: TicketPrioritySchema.optional(),
  in: TicketPrioritySchema.array().optional(),
  notIn: TicketPrioritySchema.array().optional(),
  not: z.union([TicketPrioritySchema, z.lazy(() => NestedEnumTicketPriorityFilterObjectSchema)]).optional()
}).strict();
export const EnumTicketPriorityFilterObjectSchema: z.ZodType<Prisma.EnumTicketPriorityFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumTicketPriorityFilter>;
export const EnumTicketPriorityFilterObjectZodSchema = makeSchema();
