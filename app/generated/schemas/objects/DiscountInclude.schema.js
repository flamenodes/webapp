import * as z from 'zod';
import { ProductFindManySchema as ProductFindManySchema } from '../findManyProduct.schema';
import { DiscountCountOutputTypeArgsObjectSchema as DiscountCountOutputTypeArgsObjectSchema } from './DiscountCountOutputTypeArgs.schema';
const makeSchema = () => z.object({
    product: z.union([z.boolean(), z.lazy(() => ProductFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => DiscountCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const DiscountIncludeObjectSchema = makeSchema();
export const DiscountIncludeObjectZodSchema = makeSchema();
//# sourceMappingURL=DiscountInclude.schema.js.map