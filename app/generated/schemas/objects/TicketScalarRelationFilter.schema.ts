import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { TicketWhereInputObjectSchema as TicketWhereInputObjectSchema } from './TicketWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => TicketWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => TicketWhereInputObjectSchema).optional()
}).strict();
export const TicketScalarRelationFilterObjectSchema: z.ZodType<Prisma.TicketScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TicketScalarRelationFilter>;
export const TicketScalarRelationFilterObjectZodSchema = makeSchema();
