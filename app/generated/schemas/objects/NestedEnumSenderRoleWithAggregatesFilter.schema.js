import * as z from 'zod';
import { SenderRoleSchema } from '../enums/SenderRole.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumSenderRoleFilterObjectSchema as NestedEnumSenderRoleFilterObjectSchema } from './NestedEnumSenderRoleFilter.schema';
const nestedenumsenderrolewithaggregatesfilterSchema = z.object({
    equals: SenderRoleSchema.optional(),
    in: SenderRoleSchema.array().optional(),
    notIn: SenderRoleSchema.array().optional(),
    not: z.union([SenderRoleSchema, z.lazy(() => NestedEnumSenderRoleWithAggregatesFilterObjectSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumSenderRoleFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumSenderRoleFilterObjectSchema).optional()
}).strict();
export const NestedEnumSenderRoleWithAggregatesFilterObjectSchema = nestedenumsenderrolewithaggregatesfilterSchema;
export const NestedEnumSenderRoleWithAggregatesFilterObjectZodSchema = nestedenumsenderrolewithaggregatesfilterSchema;
//# sourceMappingURL=NestedEnumSenderRoleWithAggregatesFilter.schema.js.map