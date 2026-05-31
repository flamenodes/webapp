import * as z from 'zod';
import { OrderArgsObjectSchema as OrderArgsObjectSchema } from './OrderArgs.schema';
const makeSchema = () => z.object({
    order: z.union([z.boolean(), z.lazy(() => OrderArgsObjectSchema)]).optional()
}).strict();
export const InvoiceIncludeObjectSchema = makeSchema();
export const InvoiceIncludeObjectZodSchema = makeSchema();
//# sourceMappingURL=InvoiceInclude.schema.js.map