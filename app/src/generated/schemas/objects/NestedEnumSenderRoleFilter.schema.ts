import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SenderRoleSchema } from '../enums/SenderRole.schema'

const nestedenumsenderrolefilterSchema = z.object({
  equals: SenderRoleSchema.optional(),
  in: SenderRoleSchema.array().optional(),
  notIn: SenderRoleSchema.array().optional(),
  not: z.union([SenderRoleSchema, z.lazy(() => NestedEnumSenderRoleFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumSenderRoleFilterObjectSchema: z.ZodType<Prisma.NestedEnumSenderRoleFilter> = nestedenumsenderrolefilterSchema as unknown as z.ZodType<Prisma.NestedEnumSenderRoleFilter>;
export const NestedEnumSenderRoleFilterObjectZodSchema = nestedenumsenderrolefilterSchema;
