import * as z from 'zod';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';
const makeSchema = () => z.object({
    id: z.string().optional(),
    userId: z.string(),
    status: OrderStatusSchema.optional(),
    subtotalAmount: z.number().int(),
    discountAmount: z.number().int().optional(),
    totalAmount: z.number().int(),
    couponCode: z.string().optional().nullable(),
    deliveryMessage: z.string().optional().nullable(),
    deliveryData: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
}).strict();
export const OrderCreateManyInputObjectSchema = makeSchema();
export const OrderCreateManyInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderCreateManyInput.schema.js.map