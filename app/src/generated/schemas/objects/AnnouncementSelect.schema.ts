import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  message: z.boolean().optional(),
  type: z.boolean().optional(),
  active: z.boolean().optional(),
  priority: z.boolean().optional(),
  link: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const AnnouncementSelectObjectSchema: z.ZodType<Prisma.AnnouncementSelect> = makeSchema() as unknown as z.ZodType<Prisma.AnnouncementSelect>;
export const AnnouncementSelectObjectZodSchema = makeSchema();
