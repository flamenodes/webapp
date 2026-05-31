import * as z from 'zod';
import { PageStatusSchema } from '../enums/PageStatus.schema';
const nestedenumpagestatusfilterSchema = z.object({
    equals: PageStatusSchema.optional(),
    in: PageStatusSchema.array().optional(),
    notIn: PageStatusSchema.array().optional(),
    not: z.union([PageStatusSchema, z.lazy(() => NestedEnumPageStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumPageStatusFilterObjectSchema = nestedenumpagestatusfilterSchema;
export const NestedEnumPageStatusFilterObjectZodSchema = nestedenumpagestatusfilterSchema;
//# sourceMappingURL=NestedEnumPageStatusFilter.schema.js.map