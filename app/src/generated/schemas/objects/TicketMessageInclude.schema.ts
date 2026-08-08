import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { TicketArgsObjectSchema as TicketArgsObjectSchema } from './TicketArgs.schema'

const makeSchema = () => z.object({
  sender: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  ticket: z.union([z.boolean(), z.lazy(() => TicketArgsObjectSchema)]).optional()
}).strict();
export const TicketMessageIncludeObjectSchema: z.ZodType<Prisma.TicketMessageInclude> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageInclude>;
export const TicketMessageIncludeObjectZodSchema = makeSchema();
