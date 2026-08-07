import * as z from 'zod';
import { AnnouncementTypeSchema } from '../../enums/AnnouncementType.schema';
// prettier-ignore
export const AnnouncementResultSchema = z.object({
    id: z.string(),
    title: z.string(),
    message: z.string(),
    type: AnnouncementTypeSchema,
    active: z.boolean(),
    priority: z.number().int(),
    link: z.string().nullable(),
    expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}).strict();

export type AnnouncementResultType = z.infer<typeof AnnouncementResultSchema>;
