import * as z from 'zod';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
const makeSchema = () => z.object({
    set: ProductCategorySchema.optional()
}).strict();
export const EnumProductCategoryFieldUpdateOperationsInputObjectSchema = makeSchema();
export const EnumProductCategoryFieldUpdateOperationsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumProductCategoryFieldUpdateOperationsInput.schema.js.map