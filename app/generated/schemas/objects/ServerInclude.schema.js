import * as z from 'zod';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { OrderItemArgsObjectSchema as OrderItemArgsObjectSchema } from './OrderItemArgs.schema';
const makeSchema = () => z.object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    orderItem: z.union([z.boolean(), z.lazy(() => OrderItemArgsObjectSchema)]).optional()
}).strict();
export const ServerIncludeObjectSchema = makeSchema();
export const ServerIncludeObjectZodSchema = makeSchema();
//# sourceMappingURL=ServerInclude.schema.js.map