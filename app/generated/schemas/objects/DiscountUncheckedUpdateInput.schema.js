import * as z from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { ProductUncheckedUpdateManyWithoutDiscountNestedInputObjectSchema as ProductUncheckedUpdateManyWithoutDiscountNestedInputObjectSchema } from './ProductUncheckedUpdateManyWithoutDiscountNestedInput.schema';
const makeSchema = () => z.object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    label: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    percentage: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
    product: z.lazy(() => ProductUncheckedUpdateManyWithoutDiscountNestedInputObjectSchema).optional()
}).strict();
export const DiscountUncheckedUpdateInputObjectSchema = makeSchema();
export const DiscountUncheckedUpdateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=DiscountUncheckedUpdateInput.schema.js.map