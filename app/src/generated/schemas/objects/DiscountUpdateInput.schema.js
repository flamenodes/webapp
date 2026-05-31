import * as z from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { ProductUpdateManyWithoutDiscountNestedInputObjectSchema as ProductUpdateManyWithoutDiscountNestedInputObjectSchema } from './ProductUpdateManyWithoutDiscountNestedInput.schema';
const makeSchema = () => z.object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    label: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    percentage: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
    product: z.lazy(() => ProductUpdateManyWithoutDiscountNestedInputObjectSchema).optional()
}).strict();
export const DiscountUpdateInputObjectSchema = makeSchema();
export const DiscountUpdateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=DiscountUpdateInput.schema.js.map