import * as z from 'zod';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumCouponTypeFilterObjectSchema as EnumCouponTypeFilterObjectSchema } from './EnumCouponTypeFilter.schema';
import { CouponTypeSchema } from '../enums/CouponType.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
const couponwhereinputSchema = z.object({
    AND: z.union([z.lazy(() => CouponWhereInputObjectSchema), z.lazy(() => CouponWhereInputObjectSchema).array()]).optional(),
    OR: z.lazy(() => CouponWhereInputObjectSchema).array().optional(),
    NOT: z.union([z.lazy(() => CouponWhereInputObjectSchema), z.lazy(() => CouponWhereInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    type: z.union([z.lazy(() => EnumCouponTypeFilterObjectSchema), CouponTypeSchema]).optional(),
    amount: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
    description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
    active: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
    expiresAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
    maxUses: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
    usedCount: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const CouponWhereInputObjectSchema = couponwhereinputSchema;
export const CouponWhereInputObjectZodSchema = couponwhereinputSchema;
//# sourceMappingURL=CouponWhereInput.schema.js.map