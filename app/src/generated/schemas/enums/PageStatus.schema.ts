import * as z from 'zod';

export const PageStatusSchema = z.enum(['PUBLISHED', 'DRAFT'])

export type PageStatus = z.infer<typeof PageStatusSchema>;