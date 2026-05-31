import * as z from 'zod';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    cartId: z.string(),
    productId: z.string(),
    quantity: z.number().int().optional(),
    billingPeriod: BillingPeriodSchema.optional(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional()
}).strict();
export const CartItemUncheckedCreateInputObjectSchema = makeSchema();
export const CartItemUncheckedCreateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartItemUncheckedCreateInput.schema.js.map