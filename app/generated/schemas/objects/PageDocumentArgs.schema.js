import * as z from 'zod';
import { PageDocumentSelectObjectSchema as PageDocumentSelectObjectSchema } from './PageDocumentSelect.schema';
const makeSchema = () => z.object({
    select: z.lazy(() => PageDocumentSelectObjectSchema).optional()
}).strict();
export const PageDocumentArgsObjectSchema = makeSchema();
export const PageDocumentArgsObjectZodSchema = makeSchema();
//# sourceMappingURL=PageDocumentArgs.schema.js.map