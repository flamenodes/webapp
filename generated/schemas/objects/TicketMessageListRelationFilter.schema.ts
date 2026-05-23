import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { TicketMessageWhereInputObjectSchema as TicketMessageWhereInputObjectSchema } from './TicketMessageWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => TicketMessageWhereInputObjectSchema).optional(),
  some: z.lazy(() => TicketMessageWhereInputObjectSchema).optional(),
  none: z.lazy(() => TicketMessageWhereInputObjectSchema).optional()
}).strict();
export const TicketMessageListRelationFilterObjectSchema: z.ZodType<Prisma.TicketMessageListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageListRelationFilter>;
export const TicketMessageListRelationFilterObjectZodSchema = makeSchema();
