import * as z from 'zod';
import { CartItemWhereInputObjectSchema as CartItemWhereInputObjectSchema } from './CartItemWhereInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => CartItemWhereInputObjectSchema).optional()
}).strict();
export const CartCountOutputTypeCountItemsArgsObjectSchema = makeSchema();
export const CartCountOutputTypeCountItemsArgsObjectZodSchema = makeSchema();
//# sourceMappingURL=CartCountOutputTypeCountItemsArgs.schema.js.map