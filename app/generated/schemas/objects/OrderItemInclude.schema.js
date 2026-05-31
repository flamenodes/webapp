import * as z from 'zod';
import { OrderArgsObjectSchema as OrderArgsObjectSchema } from './OrderArgs.schema';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './ProductArgs.schema';
import { ServerArgsObjectSchema as ServerArgsObjectSchema } from './ServerArgs.schema';
const makeSchema = () => z.object({
    order: z.union([z.boolean(), z.lazy(() => OrderArgsObjectSchema)]).optional(),
    product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional(),
    server: z.union([z.boolean(), z.lazy(() => ServerArgsObjectSchema)]).optional()
}).strict();
export const OrderItemIncludeObjectSchema = makeSchema();
export const OrderItemIncludeObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderItemInclude.schema.js.map