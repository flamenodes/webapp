import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumPageStatusWithAggregatesFilterObjectSchema as EnumPageStatusWithAggregatesFilterObjectSchema } from './EnumPageStatusWithAggregatesFilter.schema';
import { PageStatusSchema } from '../enums/PageStatus.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const pagedocumentscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => PageDocumentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PageDocumentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PageDocumentScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PageDocumentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PageDocumentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumPageStatusWithAggregatesFilterObjectSchema), PageStatusSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional()
}).strict();
export const PageDocumentScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.PageDocumentScalarWhereWithAggregatesInput> = pagedocumentscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.PageDocumentScalarWhereWithAggregatesInput>;
export const PageDocumentScalarWhereWithAggregatesInputObjectZodSchema = pagedocumentscalarwherewithaggregatesinputSchema;
