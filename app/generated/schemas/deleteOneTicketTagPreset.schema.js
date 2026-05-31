import * as z from 'zod';
import { TicketTagPresetSelectObjectSchema as TicketTagPresetSelectObjectSchema } from './objects/TicketTagPresetSelect.schema';
import { TicketTagPresetWhereUniqueInputObjectSchema as TicketTagPresetWhereUniqueInputObjectSchema } from './objects/TicketTagPresetWhereUniqueInput.schema';
export const TicketTagPresetDeleteOneSchema = z.object({ select: TicketTagPresetSelectObjectSchema.optional(), where: TicketTagPresetWhereUniqueInputObjectSchema }).strict();
export const TicketTagPresetDeleteOneZodSchema = z.object({ select: TicketTagPresetSelectObjectSchema.optional(), where: TicketTagPresetWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=deleteOneTicketTagPreset.schema.js.map