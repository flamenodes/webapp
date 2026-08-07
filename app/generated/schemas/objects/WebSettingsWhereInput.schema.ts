import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const websettingswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WebSettingsWhereInputObjectSchema), z.lazy(() => WebSettingsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WebSettingsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WebSettingsWhereInputObjectSchema), z.lazy(() => WebSettingsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  key: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  value: z.lazy(() => JsonFilterObjectSchema).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WebSettingsWhereInputObjectSchema: z.ZodType<Prisma.WebSettingsWhereInput> = websettingswhereinputSchema as unknown as z.ZodType<Prisma.WebSettingsWhereInput>;
export const WebSettingsWhereInputObjectZodSchema = websettingswhereinputSchema;
