import * as z from 'zod';
import { ProductCountOutputTypeCountFeaturesArgsObjectSchema as ProductCountOutputTypeCountFeaturesArgsObjectSchema } from './ProductCountOutputTypeCountFeaturesArgs.schema';
import { ProductCountOutputTypeCountCartItemsArgsObjectSchema as ProductCountOutputTypeCountCartItemsArgsObjectSchema } from './ProductCountOutputTypeCountCartItemsArgs.schema';
import { ProductCountOutputTypeCountOrderItemsArgsObjectSchema as ProductCountOutputTypeCountOrderItemsArgsObjectSchema } from './ProductCountOutputTypeCountOrderItemsArgs.schema';
const makeSchema = () => z.object({
    features: z.union([z.boolean(), z.lazy(() => ProductCountOutputTypeCountFeaturesArgsObjectSchema)]).optional(),
    cartItems: z.union([z.boolean(), z.lazy(() => ProductCountOutputTypeCountCartItemsArgsObjectSchema)]).optional(),
    orderItems: z.union([z.boolean(), z.lazy(() => ProductCountOutputTypeCountOrderItemsArgsObjectSchema)]).optional()
}).strict();
export const ProductCountOutputTypeSelectObjectSchema = makeSchema();
export const ProductCountOutputTypeSelectObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductCountOutputTypeSelect.schema.js.map