import * as z from 'zod';
import { CouponTypeSchema } from '../enums/CouponType.schema';
import { NestedEnumCouponTypeFilterObjectSchema as NestedEnumCouponTypeFilterObjectSchema } from './NestedEnumCouponTypeFilter.schema';
const makeSchema = () => z.object({
    equals: CouponTypeSchema.optional(),
    in: CouponTypeSchema.array().optional(),
    notIn: CouponTypeSchema.array().optional(),
    not: z.union([CouponTypeSchema, z.lazy(() => NestedEnumCouponTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumCouponTypeFilterObjectSchema = makeSchema();
export const EnumCouponTypeFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumCouponTypeFilter.schema.js.map