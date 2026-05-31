import * as z from 'zod';
import { SenderRoleSchema } from '../enums/SenderRole.schema';
import { NestedEnumSenderRoleFilterObjectSchema as NestedEnumSenderRoleFilterObjectSchema } from './NestedEnumSenderRoleFilter.schema';
const makeSchema = () => z.object({
    equals: SenderRoleSchema.optional(),
    in: SenderRoleSchema.array().optional(),
    notIn: SenderRoleSchema.array().optional(),
    not: z.union([SenderRoleSchema, z.lazy(() => NestedEnumSenderRoleFilterObjectSchema)]).optional()
}).strict();
export const EnumSenderRoleFilterObjectSchema = makeSchema();
export const EnumSenderRoleFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumSenderRoleFilter.schema.js.map