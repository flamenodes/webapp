import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { JsonWithAggregatesFilterObjectSchema as JsonWithAggregatesFilterObjectSchema } from './JsonWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const websettingsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => WebSettingsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WebSettingsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WebSettingsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WebSettingsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WebSettingsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  key: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  value: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional()
}).strict();
export const WebSettingsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.WebSettingsScalarWhereWithAggregatesInput> = websettingsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.WebSettingsScalarWhereWithAggregatesInput>;
export const WebSettingsScalarWhereWithAggregatesInputObjectZodSchema = websettingsscalarwherewithaggregatesinputSchema;
