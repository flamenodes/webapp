import * as z from 'zod';
import { StatusNodeSelectObjectSchema as StatusNodeSelectObjectSchema } from './StatusNodeSelect.schema';
const makeSchema = () => z.object({
    select: z.lazy(() => StatusNodeSelectObjectSchema).optional()
}).strict();
export const StatusNodeArgsObjectSchema = makeSchema();
export const StatusNodeArgsObjectZodSchema = makeSchema();
//# sourceMappingURL=StatusNodeArgs.schema.js.map