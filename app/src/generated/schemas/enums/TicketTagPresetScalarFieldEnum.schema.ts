import * as z from 'zod';

export const TicketTagPresetScalarFieldEnumSchema = z.enum(['id', 'name', 'createdAt'])

export type TicketTagPresetScalarFieldEnum = z.infer<typeof TicketTagPresetScalarFieldEnumSchema>;