import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { AnnouncementTypeSchema } from '../enums/AnnouncementType.schema'

const nestedenumannouncementtypefilterSchema = z.object({
  equals: AnnouncementTypeSchema.optional(),
  in: AnnouncementTypeSchema.array().optional(),
  notIn: AnnouncementTypeSchema.array().optional(),
  not: z.union([AnnouncementTypeSchema, z.lazy(() => NestedEnumAnnouncementTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumAnnouncementTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumAnnouncementTypeFilter> = nestedenumannouncementtypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumAnnouncementTypeFilter>;
export const NestedEnumAnnouncementTypeFilterObjectZodSchema = nestedenumannouncementtypefilterSchema;
