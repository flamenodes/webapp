import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { AnnouncementTypeSchema } from '../enums/AnnouncementType.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  message: z.string(),
  type: AnnouncementTypeSchema.optional(),
  active: z.boolean().optional(),
  priority: z.number().int().optional(),
  link: z.string().optional().nullable(),
  expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional().nullable(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional()
}).strict();
export const AnnouncementCreateManyInputObjectSchema: z.ZodType<Prisma.AnnouncementCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.AnnouncementCreateManyInput>;
export const AnnouncementCreateManyInputObjectZodSchema = makeSchema();
