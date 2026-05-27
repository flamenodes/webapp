import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const tickettagpresetscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TicketTagPresetScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TicketTagPresetScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TicketTagPresetScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TicketTagPresetScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TicketTagPresetScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const TicketTagPresetScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TicketTagPresetScalarWhereWithAggregatesInput> = tickettagpresetscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TicketTagPresetScalarWhereWithAggregatesInput>;
export const TicketTagPresetScalarWhereWithAggregatesInputObjectZodSchema = tickettagpresetscalarwherewithaggregatesinputSchema;
