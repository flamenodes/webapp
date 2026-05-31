import * as z from 'zod';
import { TicketTagPresetSelectObjectSchema as TicketTagPresetSelectObjectSchema } from './objects/TicketTagPresetSelect.schema';
import { TicketTagPresetWhereUniqueInputObjectSchema as TicketTagPresetWhereUniqueInputObjectSchema } from './objects/TicketTagPresetWhereUniqueInput.schema';
export const TicketTagPresetFindUniqueSchema = z.object({ select: TicketTagPresetSelectObjectSchema.optional(), where: TicketTagPresetWhereUniqueInputObjectSchema }).strict();
export const TicketTagPresetFindUniqueZodSchema = z.object({ select: TicketTagPresetSelectObjectSchema.optional(), where: TicketTagPresetWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=findUniqueTicketTagPreset.schema.js.map