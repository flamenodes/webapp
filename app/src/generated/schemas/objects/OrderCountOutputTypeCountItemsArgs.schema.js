import * as z from 'zod';
import { OrderItemWhereInputObjectSchema as OrderItemWhereInputObjectSchema } from './OrderItemWhereInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => OrderItemWhereInputObjectSchema).optional()
}).strict();
export const OrderCountOutputTypeCountItemsArgsObjectSchema = makeSchema();
export const OrderCountOutputTypeCountItemsArgsObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderCountOutputTypeCountItemsArgs.schema.js.map