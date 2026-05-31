import * as z from 'zod';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { ServerUncheckedCreateNestedOneWithoutOrderItemInputObjectSchema as ServerUncheckedCreateNestedOneWithoutOrderItemInputObjectSchema } from './ServerUncheckedCreateNestedOneWithoutOrderItemInput.schema';
import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';
const makeSchema = () => z.object({
    id: z.string().optional(),
    orderId: z.string(),
    productId: z.string(),
    productName: z.string(),
    quantity: z.number().int().optional(),
    billingPeriod: BillingPeriodSchema,
    unitPrice: z.number().int(),
    totalPrice: z.number().int(),
    specsSnapshot: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
    configuration: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
    expiresAt: z.coerce.date().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    server: z.lazy(() => ServerUncheckedCreateNestedOneWithoutOrderItemInputObjectSchema).optional()
}).strict();
export const OrderItemUncheckedCreateInputObjectSchema = makeSchema();
export const OrderItemUncheckedCreateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderItemUncheckedCreateInput.schema.js.map