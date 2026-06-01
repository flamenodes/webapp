import * as z from 'zod';
import { AnnouncementTypeSchema } from '../../enums/AnnouncementType.schema';
// prettier-ignore
export const AnnouncementModelSchema = z.object({
    id: z.string(),
    title: z.string(),
    message: z.string(),
    type: AnnouncementTypeSchema,
    active: z.boolean(),
    priority: z.number().int(),
    link: z.string().nullable(),
    expiresAt: z.date().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type AnnouncementPureType = z.infer<typeof AnnouncementModelSchema>;
