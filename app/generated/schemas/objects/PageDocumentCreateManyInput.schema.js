import * as z from 'zod';
import { PageStatusSchema } from '../enums/PageStatus.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    slug: z.string(),
    title: z.string(),
    description: z.string().optional(),
    content: z.string().optional(),
    status: PageStatusSchema.optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
}).strict();
export const PageDocumentCreateManyInputObjectSchema = makeSchema();
export const PageDocumentCreateManyInputObjectZodSchema = makeSchema();
//# sourceMappingURL=PageDocumentCreateManyInput.schema.js.map