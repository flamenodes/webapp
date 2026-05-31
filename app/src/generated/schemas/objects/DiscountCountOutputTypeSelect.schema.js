import * as z from 'zod';
import { DiscountCountOutputTypeCountProductArgsObjectSchema as DiscountCountOutputTypeCountProductArgsObjectSchema } from './DiscountCountOutputTypeCountProductArgs.schema';
const makeSchema = () => z.object({
    product: z.union([z.boolean(), z.lazy(() => DiscountCountOutputTypeCountProductArgsObjectSchema)]).optional()
}).strict();
export const DiscountCountOutputTypeSelectObjectSchema = makeSchema();
export const DiscountCountOutputTypeSelectObjectZodSchema = makeSchema();
//# sourceMappingURL=DiscountCountOutputTypeSelect.schema.js.map