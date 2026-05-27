import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { TicketArgsObjectSchema as TicketArgsObjectSchema } from './TicketArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  ticket: z.union([z.boolean(), z.lazy(() => TicketArgsObjectSchema)]).optional(),
  sender: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const TicketMessageIncludeObjectSchema: z.ZodType<Prisma.TicketMessageInclude> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageInclude>;
export const TicketMessageIncludeObjectZodSchema = makeSchema();
