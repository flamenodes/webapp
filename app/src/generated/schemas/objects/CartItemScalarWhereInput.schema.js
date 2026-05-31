import * as z from 'zod';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumBillingPeriodFilterObjectSchema as EnumBillingPeriodFilterObjectSchema } from './EnumBillingPeriodFilter.schema';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
const cartitemscalarwhereinputSchema = z.object({
    AND: z.union([z.lazy(() => CartItemScalarWhereInputObjectSchema), z.lazy(() => CartItemScalarWhereInputObjectSchema).array()]).optional(),
    OR: z.lazy(() => CartItemScalarWhereInputObjectSchema).array().optional(),
    NOT: z.union([z.lazy(() => CartItemScalarWhereInputObjectSchema), z.lazy(() => CartItemScalarWhereInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    cartId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    productId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
    billingPeriod: z.union([z.lazy(() => EnumBillingPeriodFilterObjectSchema), BillingPeriodSchema]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional()
}).strict();
export const CartItemScalarWhereInputObjectSchema = cartitemscalarwhereinputSchema;
export const CartItemScalarWhereInputObjectZodSchema = cartitemscalarwhereinputSchema;
//# sourceMappingURL=CartItemScalarWhereInput.schema.js.map