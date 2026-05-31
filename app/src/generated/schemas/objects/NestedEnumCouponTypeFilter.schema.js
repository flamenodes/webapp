import * as z from 'zod';
import { CouponTypeSchema } from '../enums/CouponType.schema';
const nestedenumcoupontypefilterSchema = z.object({
    equals: CouponTypeSchema.optional(),
    in: CouponTypeSchema.array().optional(),
    notIn: CouponTypeSchema.array().optional(),
    not: z.union([CouponTypeSchema, z.lazy(() => NestedEnumCouponTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumCouponTypeFilterObjectSchema = nestedenumcoupontypefilterSchema;
export const NestedEnumCouponTypeFilterObjectZodSchema = nestedenumcoupontypefilterSchema;
//# sourceMappingURL=NestedEnumCouponTypeFilter.schema.js.map