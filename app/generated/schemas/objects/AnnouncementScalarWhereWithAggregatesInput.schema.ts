import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumAnnouncementTypeWithAggregatesFilterObjectSchema as EnumAnnouncementTypeWithAggregatesFilterObjectSchema } from './EnumAnnouncementTypeWithAggregatesFilter.schema';
import { AnnouncementTypeSchema } from '../enums/AnnouncementType.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const announcementscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AnnouncementScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AnnouncementScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AnnouncementScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AnnouncementScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AnnouncementScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  message: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumAnnouncementTypeWithAggregatesFilterObjectSchema), AnnouncementTypeSchema]).optional(),
  active: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  priority: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  link: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  expiresAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const AnnouncementScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AnnouncementScalarWhereWithAggregatesInput> = announcementscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AnnouncementScalarWhereWithAggregatesInput>;
export const AnnouncementScalarWhereWithAggregatesInputObjectZodSchema = announcementscalarwherewithaggregatesinputSchema;
