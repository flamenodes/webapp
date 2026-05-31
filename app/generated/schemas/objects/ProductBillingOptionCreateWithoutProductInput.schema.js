import * as z from 'zod';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    billingPeriod: BillingPeriodSchema,
    price: z.number().int()
}).strict();
export const ProductBillingOptionCreateWithoutProductInputObjectSchema = makeSchema();
export const ProductBillingOptionCreateWithoutProductInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductBillingOptionCreateWithoutProductInput.schema.js.map