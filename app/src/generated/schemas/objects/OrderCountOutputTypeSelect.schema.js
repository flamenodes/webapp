import * as z from 'zod';
import { OrderCountOutputTypeCountItemsArgsObjectSchema as OrderCountOutputTypeCountItemsArgsObjectSchema } from './OrderCountOutputTypeCountItemsArgs.schema';
const makeSchema = () => z.object({
    items: z.union([z.boolean(), z.lazy(() => OrderCountOutputTypeCountItemsArgsObjectSchema)]).optional()
}).strict();
export const OrderCountOutputTypeSelectObjectSchema = makeSchema();
export const OrderCountOutputTypeSelectObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderCountOutputTypeSelect.schema.js.map