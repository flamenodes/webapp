import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  priority: z.literal(true).optional()
}).strict();
export const AnnouncementAvgAggregateInputObjectSchema: z.ZodType<Prisma.AnnouncementAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AnnouncementAvgAggregateInputType>;
export const AnnouncementAvgAggregateInputObjectZodSchema = makeSchema();
