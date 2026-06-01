import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  message: z.literal(true).optional(),
  type: z.literal(true).optional(),
  active: z.literal(true).optional(),
  priority: z.literal(true).optional(),
  link: z.literal(true).optional(),
  expiresAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const AnnouncementMinAggregateInputObjectSchema: z.ZodType<Prisma.AnnouncementMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AnnouncementMinAggregateInputType>;
export const AnnouncementMinAggregateInputObjectZodSchema = makeSchema();
