import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  priority: z.literal(true).optional()
}).strict();
export const AnnouncementAvgAggregateInputObjectSchema: z.ZodType<Prisma.AnnouncementAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AnnouncementAvgAggregateInputType>;
export const AnnouncementAvgAggregateInputObjectZodSchema = makeSchema();
