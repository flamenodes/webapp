import * as z from 'zod';

export const AnnouncementTypeSchema = z.enum(['INFO', 'WARNING', 'SUCCESS', 'ERROR', 'MAINTENANCE'])

export type AnnouncementType = z.infer<typeof AnnouncementTypeSchema>;