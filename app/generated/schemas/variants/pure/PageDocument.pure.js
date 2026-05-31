import * as z from 'zod';
import { PageStatusSchema } from '../../enums/PageStatus.schema';
// prettier-ignore
export const PageDocumentModelSchema = z.object({
    id: z.string(),
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    content: z.string(),
    status: PageStatusSchema,
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();
//# sourceMappingURL=PageDocument.pure.js.map