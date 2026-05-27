import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { SenderRoleSchema } from '../enums/SenderRole.schema';
import { NestedEnumSenderRoleWithAggregatesFilterObjectSchema as NestedEnumSenderRoleWithAggregatesFilterObjectSchema } from './NestedEnumSenderRoleWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumSenderRoleFilterObjectSchema as NestedEnumSenderRoleFilterObjectSchema } from './NestedEnumSenderRoleFilter.schema'

const makeSchema = () => z.object({
  equals: SenderRoleSchema.optional(),
  in: SenderRoleSchema.array().optional(),
  notIn: SenderRoleSchema.array().optional(),
  not: z.union([SenderRoleSchema, z.lazy(() => NestedEnumSenderRoleWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumSenderRoleFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumSenderRoleFilterObjectSchema).optional()
}).strict();
export const EnumSenderRoleWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumSenderRoleWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumSenderRoleWithAggregatesFilter>;
export const EnumSenderRoleWithAggregatesFilterObjectZodSchema = makeSchema();
