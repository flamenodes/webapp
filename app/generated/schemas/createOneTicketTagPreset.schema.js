import * as z from 'zod';
import { TicketTagPresetSelectObjectSchema as TicketTagPresetSelectObjectSchema } from './objects/TicketTagPresetSelect.schema';
import { TicketTagPresetCreateInputObjectSchema as TicketTagPresetCreateInputObjectSchema } from './objects/TicketTagPresetCreateInput.schema';
import { TicketTagPresetUncheckedCreateInputObjectSchema as TicketTagPresetUncheckedCreateInputObjectSchema } from './objects/TicketTagPresetUncheckedCreateInput.schema';
export const TicketTagPresetCreateOneSchema = z.object({ select: TicketTagPresetSelectObjectSchema.optional(), data: z.union([TicketTagPresetCreateInputObjectSchema, TicketTagPresetUncheckedCreateInputObjectSchema]) }).strict();
export const TicketTagPresetCreateOneZodSchema = z.object({ select: TicketTagPresetSelectObjectSchema.optional(), data: z.union([TicketTagPresetCreateInputObjectSchema, TicketTagPresetUncheckedCreateInputObjectSchema]) }).strict();
//# sourceMappingURL=createOneTicketTagPreset.schema.js.map