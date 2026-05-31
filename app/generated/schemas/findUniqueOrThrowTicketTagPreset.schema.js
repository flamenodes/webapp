import * as z from 'zod';
import { TicketTagPresetSelectObjectSchema as TicketTagPresetSelectObjectSchema } from './objects/TicketTagPresetSelect.schema';
import { TicketTagPresetWhereUniqueInputObjectSchema as TicketTagPresetWhereUniqueInputObjectSchema } from './objects/TicketTagPresetWhereUniqueInput.schema';
export const TicketTagPresetFindUniqueOrThrowSchema = z.object({ select: TicketTagPresetSelectObjectSchema.optional(), where: TicketTagPresetWhereUniqueInputObjectSchema }).strict();
export const TicketTagPresetFindUniqueOrThrowZodSchema = z.object({ select: TicketTagPresetSelectObjectSchema.optional(), where: TicketTagPresetWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=findUniqueOrThrowTicketTagPreset.schema.js.map