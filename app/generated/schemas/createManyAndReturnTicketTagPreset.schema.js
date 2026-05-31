import * as z from 'zod';
import { TicketTagPresetSelectObjectSchema as TicketTagPresetSelectObjectSchema } from './objects/TicketTagPresetSelect.schema';
import { TicketTagPresetCreateManyInputObjectSchema as TicketTagPresetCreateManyInputObjectSchema } from './objects/TicketTagPresetCreateManyInput.schema';
export const TicketTagPresetCreateManyAndReturnSchema = z.object({ select: TicketTagPresetSelectObjectSchema.optional(), data: z.union([TicketTagPresetCreateManyInputObjectSchema, z.array(TicketTagPresetCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const TicketTagPresetCreateManyAndReturnZodSchema = z.object({ select: TicketTagPresetSelectObjectSchema.optional(), data: z.union([TicketTagPresetCreateManyInputObjectSchema, z.array(TicketTagPresetCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyAndReturnTicketTagPreset.schema.js.map