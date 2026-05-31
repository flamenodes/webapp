import * as z from 'zod';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { OrderItemUncheckedCreateNestedManyWithoutOrderInputObjectSchema as OrderItemUncheckedCreateNestedManyWithoutOrderInputObjectSchema } from './OrderItemUncheckedCreateNestedManyWithoutOrderInput.schema';
import { InvoiceUncheckedCreateNestedOneWithoutOrderInputObjectSchema as InvoiceUncheckedCreateNestedOneWithoutOrderInputObjectSchema } from './InvoiceUncheckedCreateNestedOneWithoutOrderInput.schema';
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
    items: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutOrderInputObjectSchema).optional(),
    invoice: z.lazy(() => InvoiceUncheckedCreateNestedOneWithoutOrderInputObjectSchema).optional()
}).strict();
export const OrderUncheckedCreateInputObjectSchema = makeSchema();
export const OrderUncheckedCreateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderUncheckedCreateInput.schema.js.map