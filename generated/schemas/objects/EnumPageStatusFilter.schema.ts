import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { PageStatusSchema } from '../enums/PageStatus.schema';
import { NestedEnumPageStatusFilterObjectSchema as NestedEnumPageStatusFilterObjectSchema } from './NestedEnumPageStatusFilter.schema'

const makeSchema = () => z.object({
  equals: PageStatusSchema.optional(),
  in: PageStatusSchema.array().optional(),
  notIn: PageStatusSchema.array().optional(),
  not: z.union([PageStatusSchema, z.lazy(() => NestedEnumPageStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumPageStatusFilterObjectSchema: z.ZodType<Prisma.EnumPageStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumPageStatusFilter>;
export const EnumPageStatusFilterObjectZodSchema = makeSchema();
