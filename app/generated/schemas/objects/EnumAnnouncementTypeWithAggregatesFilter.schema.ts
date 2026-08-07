import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { AnnouncementTypeSchema } from '../enums/AnnouncementType.schema';
import { NestedEnumAnnouncementTypeWithAggregatesFilterObjectSchema as NestedEnumAnnouncementTypeWithAggregatesFilterObjectSchema } from './NestedEnumAnnouncementTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumAnnouncementTypeFilterObjectSchema as NestedEnumAnnouncementTypeFilterObjectSchema } from './NestedEnumAnnouncementTypeFilter.schema'

const makeSchema = () => z.object({
  equals: AnnouncementTypeSchema.optional(),
  in: AnnouncementTypeSchema.array().optional(),
  notIn: AnnouncementTypeSchema.array().optional(),
  not: z.union([AnnouncementTypeSchema, z.lazy(() => NestedEnumAnnouncementTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumAnnouncementTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumAnnouncementTypeFilterObjectSchema).optional()
}).strict();
export const EnumAnnouncementTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumAnnouncementTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumAnnouncementTypeWithAggregatesFilter>;
export const EnumAnnouncementTypeWithAggregatesFilterObjectZodSchema = makeSchema();
