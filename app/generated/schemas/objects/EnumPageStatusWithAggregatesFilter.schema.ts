import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { PageStatusSchema } from '../enums/PageStatus.schema';
import { NestedEnumPageStatusWithAggregatesFilterObjectSchema as NestedEnumPageStatusWithAggregatesFilterObjectSchema } from './NestedEnumPageStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumPageStatusFilterObjectSchema as NestedEnumPageStatusFilterObjectSchema } from './NestedEnumPageStatusFilter.schema'

const makeSchema = () => z.object({
  equals: PageStatusSchema.optional(),
  in: PageStatusSchema.array().optional(),
  notIn: PageStatusSchema.array().optional(),
  not: z.union([PageStatusSchema, z.lazy(() => NestedEnumPageStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumPageStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumPageStatusFilterObjectSchema).optional()
}).strict();
export const EnumPageStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumPageStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumPageStatusWithAggregatesFilter>;
export const EnumPageStatusWithAggregatesFilterObjectZodSchema = makeSchema();
