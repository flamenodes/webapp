import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { AnnouncementTypeSchema } from '../enums/AnnouncementType.schema';
import { NestedEnumAnnouncementTypeFilterObjectSchema as NestedEnumAnnouncementTypeFilterObjectSchema } from './NestedEnumAnnouncementTypeFilter.schema'

const makeSchema = () => z.object({
  equals: AnnouncementTypeSchema.optional(),
  in: AnnouncementTypeSchema.array().optional(),
  notIn: AnnouncementTypeSchema.array().optional(),
  not: z.union([AnnouncementTypeSchema, z.lazy(() => NestedEnumAnnouncementTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumAnnouncementTypeFilterObjectSchema: z.ZodType<Prisma.EnumAnnouncementTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumAnnouncementTypeFilter>;
export const EnumAnnouncementTypeFilterObjectZodSchema = makeSchema();
