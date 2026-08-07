import * as z from 'zod';
import { AnnouncementTypeSchema } from '../../enums/AnnouncementType.schema';
// prettier-ignore
export const AnnouncementInputSchema = z.object({
    id: z.string(),
    title: z.string(),
    message: z.string(),
    type: AnnouncementTypeSchema,
    active: z.boolean(),
    priority: z.number().int(),
    link: z.string().optional().nullable(),
    expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").optional().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}).strict();

export type AnnouncementInputType = z.infer<typeof AnnouncementInputSchema>;
