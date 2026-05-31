import * as z from 'zod';
import { PageStatusSchema } from '../enums/PageStatus.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    slug: z.string(),
    title: z.string(),
    description: z.string().optional(),
    content: z.string().optional(),
    status: PageStatusSchema.optional(),
    createdAt: z.coerce.date().optional()
}).strict();
export const PageDocumentCreateInputObjectSchema = makeSchema();
export const PageDocumentCreateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=PageDocumentCreateInput.schema.js.map