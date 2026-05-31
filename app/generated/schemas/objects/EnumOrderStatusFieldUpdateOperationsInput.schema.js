import * as z from 'zod';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
const makeSchema = () => z.object({
    set: OrderStatusSchema.optional()
}).strict();
export const EnumOrderStatusFieldUpdateOperationsInputObjectSchema = makeSchema();
export const EnumOrderStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumOrderStatusFieldUpdateOperationsInput.schema.js.map