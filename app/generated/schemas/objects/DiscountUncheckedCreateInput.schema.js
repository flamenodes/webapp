import * as z from 'zod';
import { ProductUncheckedCreateNestedManyWithoutDiscountInputObjectSchema as ProductUncheckedCreateNestedManyWithoutDiscountInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutDiscountInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    label: z.string(),
    percentage: z.number().int(),
    product: z.lazy(() => ProductUncheckedCreateNestedManyWithoutDiscountInputObjectSchema).optional()
}).strict();
export const DiscountUncheckedCreateInputObjectSchema = makeSchema();
export const DiscountUncheckedCreateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=DiscountUncheckedCreateInput.schema.js.map