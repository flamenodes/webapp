import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const aisupportconfigwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AiSupportConfigWhereInputObjectSchema), z.lazy(() => AiSupportConfigWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AiSupportConfigWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AiSupportConfigWhereInputObjectSchema), z.lazy(() => AiSupportConfigWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  enabled: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  systemPrompt: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  model: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional()
}).strict();
export const AiSupportConfigWhereInputObjectSchema: z.ZodType<Prisma.AiSupportConfigWhereInput> = aisupportconfigwhereinputSchema as unknown as z.ZodType<Prisma.AiSupportConfigWhereInput>;
export const AiSupportConfigWhereInputObjectZodSchema = aisupportconfigwhereinputSchema;
