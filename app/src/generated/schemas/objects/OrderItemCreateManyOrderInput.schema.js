import * as z from 'zod';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';
const makeSchema = () => z.object({
    id: z.string().optional(),
    productId: z.string(),
    productName: z.string(),
    quantity: z.number().int().optional(),
    billingPeriod: BillingPeriodSchema,
    unitPrice: z.number().int(),
    totalPrice: z.number().int(),
    specsSnapshot: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
    expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional()
}).strict();
export const OrderItemCreateManyOrderInputObjectSchema = makeSchema();
export const OrderItemCreateManyOrderInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderItemCreateManyOrderInput.schema.js.map