import * as z from 'zod';
import { PageStatusSchema } from '../../enums/PageStatus.schema';
// prettier-ignore
export const PageDocumentResultSchema = z.object({
    id: z.string(),
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    content: z.string(),
    status: PageStatusSchema,
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}).strict();

export type PageDocumentResultType = z.infer<typeof PageDocumentResultSchema>;
