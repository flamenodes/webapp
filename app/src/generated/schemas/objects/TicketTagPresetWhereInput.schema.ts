import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const tickettagpresetwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TicketTagPresetWhereInputObjectSchema), z.lazy(() => TicketTagPresetWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TicketTagPresetWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TicketTagPresetWhereInputObjectSchema), z.lazy(() => TicketTagPresetWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional()
}).strict();
export const TicketTagPresetWhereInputObjectSchema: z.ZodType<Prisma.TicketTagPresetWhereInput> = tickettagpresetwhereinputSchema as unknown as z.ZodType<Prisma.TicketTagPresetWhereInput>;
export const TicketTagPresetWhereInputObjectZodSchema = tickettagpresetwhereinputSchema;
