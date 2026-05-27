import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const tickettagpresetwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TicketTagPresetWhereInputObjectSchema), z.lazy(() => TicketTagPresetWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TicketTagPresetWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TicketTagPresetWhereInputObjectSchema), z.lazy(() => TicketTagPresetWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const TicketTagPresetWhereInputObjectSchema: z.ZodType<Prisma.TicketTagPresetWhereInput> = tickettagpresetwhereinputSchema as unknown as z.ZodType<Prisma.TicketTagPresetWhereInput>;
export const TicketTagPresetWhereInputObjectZodSchema = tickettagpresetwhereinputSchema;
