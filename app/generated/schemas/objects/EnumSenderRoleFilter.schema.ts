import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SenderRoleSchema } from '../enums/SenderRole.schema';
import { NestedEnumSenderRoleFilterObjectSchema as NestedEnumSenderRoleFilterObjectSchema } from './NestedEnumSenderRoleFilter.schema'

const makeSchema = () => z.object({
  equals: SenderRoleSchema.optional(),
  in: SenderRoleSchema.array().optional(),
  notIn: SenderRoleSchema.array().optional(),
  not: z.union([SenderRoleSchema, z.lazy(() => NestedEnumSenderRoleFilterObjectSchema)]).optional()
}).strict();
export const EnumSenderRoleFilterObjectSchema: z.ZodType<Prisma.EnumSenderRoleFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumSenderRoleFilter>;
export const EnumSenderRoleFilterObjectZodSchema = makeSchema();
