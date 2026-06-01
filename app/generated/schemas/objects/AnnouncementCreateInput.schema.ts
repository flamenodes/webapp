import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { AnnouncementTypeSchema } from '../enums/AnnouncementType.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  message: z.string(),
  type: AnnouncementTypeSchema.optional(),
  active: z.boolean().optional(),
  priority: z.number().int().optional(),
  link: z.string().optional().nullable(),
  expiresAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const AnnouncementCreateInputObjectSchema: z.ZodType<Prisma.AnnouncementCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AnnouncementCreateInput>;
export const AnnouncementCreateInputObjectZodSchema = makeSchema();
