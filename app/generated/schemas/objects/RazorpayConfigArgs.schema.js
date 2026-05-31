import * as z from 'zod';
import { RazorpayConfigSelectObjectSchema as RazorpayConfigSelectObjectSchema } from './RazorpayConfigSelect.schema';
const makeSchema = () => z.object({
    select: z.lazy(() => RazorpayConfigSelectObjectSchema).optional()
}).strict();
export const RazorpayConfigArgsObjectSchema = makeSchema();
export const RazorpayConfigArgsObjectZodSchema = makeSchema();
//# sourceMappingURL=RazorpayConfigArgs.schema.js.map