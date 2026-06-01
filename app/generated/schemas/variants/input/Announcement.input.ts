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
    expiresAt: z.date().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type AnnouncementInputType = z.infer<typeof AnnouncementInputSchema>;
