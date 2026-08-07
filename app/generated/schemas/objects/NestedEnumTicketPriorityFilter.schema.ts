import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { TicketPrioritySchema } from '../enums/TicketPriority.schema'

const nestedenumticketpriorityfilterSchema = z.object({
  equals: TicketPrioritySchema.optional(),
  in: TicketPrioritySchema.array().optional(),
  notIn: TicketPrioritySchema.array().optional(),
  not: z.union([TicketPrioritySchema, z.lazy(() => NestedEnumTicketPriorityFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumTicketPriorityFilterObjectSchema: z.ZodType<Prisma.NestedEnumTicketPriorityFilter> = nestedenumticketpriorityfilterSchema as unknown as z.ZodType<Prisma.NestedEnumTicketPriorityFilter>;
export const NestedEnumTicketPriorityFilterObjectZodSchema = nestedenumticketpriorityfilterSchema;
