import * as z from 'zod';
import { ProductCreateNestedManyWithoutDiscountInputObjectSchema as ProductCreateNestedManyWithoutDiscountInputObjectSchema } from './ProductCreateNestedManyWithoutDiscountInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    label: z.string(),
    percentage: z.number().int(),
    product: z.lazy(() => ProductCreateNestedManyWithoutDiscountInputObjectSchema).optional()
}).strict();
export const DiscountCreateInputObjectSchema = makeSchema();
export const DiscountCreateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=DiscountCreateInput.schema.js.map