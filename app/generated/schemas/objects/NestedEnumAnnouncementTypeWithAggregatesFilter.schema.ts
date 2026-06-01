import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { AnnouncementTypeSchema } from '../enums/AnnouncementType.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumAnnouncementTypeFilterObjectSchema as NestedEnumAnnouncementTypeFilterObjectSchema } from './NestedEnumAnnouncementTypeFilter.schema'

const nestedenumannouncementtypewithaggregatesfilterSchema = z.object({
  equals: AnnouncementTypeSchema.optional(),
  in: AnnouncementTypeSchema.array().optional(),
  notIn: AnnouncementTypeSchema.array().optional(),
  not: z.union([AnnouncementTypeSchema, z.lazy(() => NestedEnumAnnouncementTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumAnnouncementTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumAnnouncementTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumAnnouncementTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumAnnouncementTypeWithAggregatesFilter> = nestedenumannouncementtypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumAnnouncementTypeWithAggregatesFilter>;
export const NestedEnumAnnouncementTypeWithAggregatesFilterObjectZodSchema = nestedenumannouncementtypewithaggregatesfilterSchema;
