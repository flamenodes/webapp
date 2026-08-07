import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const aisupportconfigscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AiSupportConfigScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AiSupportConfigScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AiSupportConfigScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AiSupportConfigScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AiSupportConfigScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  enabled: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  systemPrompt: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  model: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional()
}).strict();
export const AiSupportConfigScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AiSupportConfigScalarWhereWithAggregatesInput> = aisupportconfigscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AiSupportConfigScalarWhereWithAggregatesInput>;
export const AiSupportConfigScalarWhereWithAggregatesInputObjectZodSchema = aisupportconfigscalarwherewithaggregatesinputSchema;
