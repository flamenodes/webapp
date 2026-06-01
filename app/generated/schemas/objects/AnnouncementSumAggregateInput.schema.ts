import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  priority: z.literal(true).optional()
}).strict();
export const AnnouncementSumAggregateInputObjectSchema: z.ZodType<Prisma.AnnouncementSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AnnouncementSumAggregateInputType>;
export const AnnouncementSumAggregateInputObjectZodSchema = makeSchema();
