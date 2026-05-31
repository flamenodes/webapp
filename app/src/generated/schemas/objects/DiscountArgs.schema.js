import * as z from 'zod';
import { DiscountSelectObjectSchema as DiscountSelectObjectSchema } from './DiscountSelect.schema';
import { DiscountIncludeObjectSchema as DiscountIncludeObjectSchema } from './DiscountInclude.schema';
const makeSchema = () => z.object({
    select: z.lazy(() => DiscountSelectObjectSchema).optional(),
    include: z.lazy(() => DiscountIncludeObjectSchema).optional()
}).strict();
export const DiscountArgsObjectSchema = makeSchema();
export const DiscountArgsObjectZodSchema = makeSchema();
//# sourceMappingURL=DiscountArgs.schema.js.map