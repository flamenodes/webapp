import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const ticketcounterwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TicketCounterWhereInputObjectSchema), z.lazy(() => TicketCounterWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TicketCounterWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TicketCounterWhereInputObjectSchema), z.lazy(() => TicketCounterWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  seq: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const TicketCounterWhereInputObjectSchema: z.ZodType<Prisma.TicketCounterWhereInput> = ticketcounterwhereinputSchema as unknown as z.ZodType<Prisma.TicketCounterWhereInput>;
export const TicketCounterWhereInputObjectZodSchema = ticketcounterwhereinputSchema;
