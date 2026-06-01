import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { AnnouncementSelectObjectSchema as AnnouncementSelectObjectSchema } from './AnnouncementSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AnnouncementSelectObjectSchema).optional()
}).strict();
export const AnnouncementArgsObjectSchema = makeSchema();
export const AnnouncementArgsObjectZodSchema = makeSchema();
