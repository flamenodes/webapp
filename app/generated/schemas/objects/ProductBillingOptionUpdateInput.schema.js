import * as z from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
import { EnumBillingPeriodFieldUpdateOperationsInputObjectSchema as EnumBillingPeriodFieldUpdateOperationsInputObjectSchema } from './EnumBillingPeriodFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { ProductUpdateOneRequiredWithoutBillingOptionsNestedInputObjectSchema as ProductUpdateOneRequiredWithoutBillingOptionsNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutBillingOptionsNestedInput.schema';
const makeSchema = () => z.object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    billingPeriod: z.union([BillingPeriodSchema, z.lazy(() => EnumBillingPeriodFieldUpdateOperationsInputObjectSchema)]).optional(),
    price: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
    product: z.lazy(() => ProductUpdateOneRequiredWithoutBillingOptionsNestedInputObjectSchema).optional()
}).strict();
export const ProductBillingOptionUpdateInputObjectSchema = makeSchema();
export const ProductBillingOptionUpdateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductBillingOptionUpdateInput.schema.js.map