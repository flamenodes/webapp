import * as z from 'zod';

export const SenderRoleSchema = z.enum(['USER', 'SUPPORT', 'ADMIN'])

export type SenderRole = z.infer<typeof SenderRoleSchema>;