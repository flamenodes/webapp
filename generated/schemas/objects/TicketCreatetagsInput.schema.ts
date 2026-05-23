import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const TicketCreatetagsInputObjectSchema: z.ZodType<Prisma.TicketCreatetagsInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketCreatetagsInput>;
export const TicketCreatetagsInputObjectZodSchema = makeSchema();
