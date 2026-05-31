import * as z from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { ProductUpdateOneRequiredWithoutFeaturesNestedInputObjectSchema as ProductUpdateOneRequiredWithoutFeaturesNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutFeaturesNestedInput.schema';
const makeSchema = () => z.object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    label: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    sortOrder: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
    product: z.lazy(() => ProductUpdateOneRequiredWithoutFeaturesNestedInputObjectSchema).optional()
}).strict();
export const ProductFeatureUpdateInputObjectSchema = makeSchema();
export const ProductFeatureUpdateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductFeatureUpdateInput.schema.js.map