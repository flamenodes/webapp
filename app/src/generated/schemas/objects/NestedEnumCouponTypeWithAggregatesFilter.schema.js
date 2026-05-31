import * as z from 'zod';
import { CouponTypeSchema } from '../enums/CouponType.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumCouponTypeFilterObjectSchema as NestedEnumCouponTypeFilterObjectSchema } from './NestedEnumCouponTypeFilter.schema';
const nestedenumcoupontypewithaggregatesfilterSchema = z.object({
    equals: CouponTypeSchema.optional(),
    in: CouponTypeSchema.array().optional(),
    notIn: CouponTypeSchema.array().optional(),
    not: z.union([CouponTypeSchema, z.lazy(() => NestedEnumCouponTypeWithAggregatesFilterObjectSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumCouponTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumCouponTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumCouponTypeWithAggregatesFilterObjectSchema = nestedenumcoupontypewithaggregatesfilterSchema;
export const NestedEnumCouponTypeWithAggregatesFilterObjectZodSchema = nestedenumcoupontypewithaggregatesfilterSchema;
//# sourceMappingURL=NestedEnumCouponTypeWithAggregatesFilter.schema.js.map