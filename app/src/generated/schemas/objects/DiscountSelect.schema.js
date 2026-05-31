import * as z from 'zod';
import { ProductFindManySchema as ProductFindManySchema } from '../findManyProduct.schema';
import { DiscountCountOutputTypeArgsObjectSchema as DiscountCountOutputTypeArgsObjectSchema } from './DiscountCountOutputTypeArgs.schema';
const makeSchema = () => z.object({
    id: z.boolean().optional(),
    label: z.boolean().optional(),
    percentage: z.boolean().optional(),
    product: z.union([z.boolean(), z.lazy(() => ProductFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => DiscountCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const DiscountSelectObjectSchema = makeSchema();
export const DiscountSelectObjectZodSchema = makeSchema();
//# sourceMappingURL=DiscountSelect.schema.js.map