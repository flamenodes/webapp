import * as z from 'zod';
import { DiscountCountOutputTypeSelectObjectSchema as DiscountCountOutputTypeSelectObjectSchema } from './DiscountCountOutputTypeSelect.schema';
const makeSchema = () => z.object({
    select: z.lazy(() => DiscountCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const DiscountCountOutputTypeArgsObjectSchema = makeSchema();
export const DiscountCountOutputTypeArgsObjectZodSchema = makeSchema();
//# sourceMappingURL=DiscountCountOutputTypeArgs.schema.js.map