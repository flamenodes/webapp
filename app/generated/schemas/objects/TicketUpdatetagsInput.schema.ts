import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const TicketUpdatetagsInputObjectSchema: z.ZodType<Prisma.TicketUpdatetagsInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketUpdatetagsInput>;
export const TicketUpdatetagsInputObjectZodSchema = makeSchema();
