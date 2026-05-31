import * as z from 'zod';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { UserCreateNestedOneWithoutOrdersInputObjectSchema as UserCreateNestedOneWithoutOrdersInputObjectSchema } from './UserCreateNestedOneWithoutOrdersInput.schema';
import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';
const makeSchema = () => z.object({
    id: z.string().optional(),
    status: OrderStatusSchema.optional(),
    subtotalAmount: z.number().int(),
    discountAmount: z.number().int().optional(),
    totalAmount: z.number().int(),
    couponCode: z.string().optional().nullable(),
    deliveryMessage: z.string().optional().nullable(),
    deliveryData: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutOrdersInputObjectSchema)
}).strict();
export const OrderCreateWithoutItemsInputObjectSchema = makeSchema();
export const OrderCreateWithoutItemsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderCreateWithoutItemsInput.schema.js.map