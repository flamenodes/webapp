import * as z from 'zod';
import { ProductBillingOptionProductIdBillingPeriodCompoundUniqueInputObjectSchema as ProductBillingOptionProductIdBillingPeriodCompoundUniqueInputObjectSchema } from './ProductBillingOptionProductIdBillingPeriodCompoundUniqueInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    productId_billingPeriod: z.lazy(() => ProductBillingOptionProductIdBillingPeriodCompoundUniqueInputObjectSchema).optional()
}).strict();
export const ProductBillingOptionWhereUniqueInputObjectSchema = makeSchema();
export const ProductBillingOptionWhereUniqueInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductBillingOptionWhereUniqueInput.schema.js.map