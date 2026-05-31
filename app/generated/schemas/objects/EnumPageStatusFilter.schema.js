import * as z from 'zod';
import { PageStatusSchema } from '../enums/PageStatus.schema';
import { NestedEnumPageStatusFilterObjectSchema as NestedEnumPageStatusFilterObjectSchema } from './NestedEnumPageStatusFilter.schema';
const makeSchema = () => z.object({
    equals: PageStatusSchema.optional(),
    in: PageStatusSchema.array().optional(),
    notIn: PageStatusSchema.array().optional(),
    not: z.union([PageStatusSchema, z.lazy(() => NestedEnumPageStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumPageStatusFilterObjectSchema = makeSchema();
export const EnumPageStatusFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumPageStatusFilter.schema.js.map