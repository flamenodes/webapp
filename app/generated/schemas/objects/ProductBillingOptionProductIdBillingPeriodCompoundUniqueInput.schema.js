import * as z from 'zod';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
const makeSchema = () => z.object({
    productId: z.string(),
    billingPeriod: BillingPeriodSchema
}).strict();
export const ProductBillingOptionProductIdBillingPeriodCompoundUniqueInputObjectSchema = makeSchema();
export const ProductBillingOptionProductIdBillingPeriodCompoundUniqueInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductBillingOptionProductIdBillingPeriodCompoundUniqueInput.schema.js.map