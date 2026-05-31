import * as z from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CartItemUncheckedUpdateManyWithoutCartNestedInputObjectSchema as CartItemUncheckedUpdateManyWithoutCartNestedInputObjectSchema } from './CartItemUncheckedUpdateManyWithoutCartNestedInput.schema';
const makeSchema = () => z.object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    couponCode: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    items: z.lazy(() => CartItemUncheckedUpdateManyWithoutCartNestedInputObjectSchema).optional()
}).strict();
export const CartUncheckedUpdateWithoutUserInputObjectSchema = makeSchema();
export const CartUncheckedUpdateWithoutUserInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartUncheckedUpdateWithoutUserInput.schema.js.map