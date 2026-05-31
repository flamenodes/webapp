import * as z from 'zod';
import { TicketTagPresetCreateManyInputObjectSchema as TicketTagPresetCreateManyInputObjectSchema } from './objects/TicketTagPresetCreateManyInput.schema';
export const TicketTagPresetCreateManySchema = z.object({ data: z.union([TicketTagPresetCreateManyInputObjectSchema, z.array(TicketTagPresetCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const TicketTagPresetCreateManyZodSchema = z.object({ data: z.union([TicketTagPresetCreateManyInputObjectSchema, z.array(TicketTagPresetCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyTicketTagPreset.schema.js.map