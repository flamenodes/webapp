import * as z from 'zod';
import { SenderRoleSchema } from '../enums/SenderRole.schema';
const nestedenumsenderrolefilterSchema = z.object({
    equals: SenderRoleSchema.optional(),
    in: SenderRoleSchema.array().optional(),
    notIn: SenderRoleSchema.array().optional(),
    not: z.union([SenderRoleSchema, z.lazy(() => NestedEnumSenderRoleFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumSenderRoleFilterObjectSchema = nestedenumsenderrolefilterSchema;
export const NestedEnumSenderRoleFilterObjectZodSchema = nestedenumsenderrolefilterSchema;
//# sourceMappingURL=NestedEnumSenderRoleFilter.schema.js.map