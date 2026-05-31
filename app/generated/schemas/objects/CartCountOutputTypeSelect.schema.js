import * as z from 'zod';
import { CartCountOutputTypeCountItemsArgsObjectSchema as CartCountOutputTypeCountItemsArgsObjectSchema } from './CartCountOutputTypeCountItemsArgs.schema';
const makeSchema = () => z.object({
    items: z.union([z.boolean(), z.lazy(() => CartCountOutputTypeCountItemsArgsObjectSchema)]).optional()
}).strict();
export const CartCountOutputTypeSelectObjectSchema = makeSchema();
export const CartCountOutputTypeSelectObjectZodSchema = makeSchema();
//# sourceMappingURL=CartCountOutputTypeSelect.schema.js.map