import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumPageStatusFilterObjectSchema as EnumPageStatusFilterObjectSchema } from './EnumPageStatusFilter.schema';
import { PageStatusSchema } from '../enums/PageStatus.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const pagedocumentwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PageDocumentWhereInputObjectSchema), z.lazy(() => PageDocumentWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PageDocumentWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PageDocumentWhereInputObjectSchema), z.lazy(() => PageDocumentWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumPageStatusFilterObjectSchema), PageStatusSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional()
}).strict();
export const PageDocumentWhereInputObjectSchema: z.ZodType<Prisma.PageDocumentWhereInput> = pagedocumentwhereinputSchema as unknown as z.ZodType<Prisma.PageDocumentWhereInput>;
export const PageDocumentWhereInputObjectZodSchema = pagedocumentwhereinputSchema;
