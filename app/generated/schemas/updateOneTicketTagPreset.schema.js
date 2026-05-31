import * as z from 'zod';
import { TicketTagPresetSelectObjectSchema as TicketTagPresetSelectObjectSchema } from './objects/TicketTagPresetSelect.schema';
import { TicketTagPresetUpdateInputObjectSchema as TicketTagPresetUpdateInputObjectSchema } from './objects/TicketTagPresetUpdateInput.schema';
import { TicketTagPresetUncheckedUpdateInputObjectSchema as TicketTagPresetUncheckedUpdateInputObjectSchema } from './objects/TicketTagPresetUncheckedUpdateInput.schema';
import { TicketTagPresetWhereUniqueInputObjectSchema as TicketTagPresetWhereUniqueInputObjectSchema } from './objects/TicketTagPresetWhereUniqueInput.schema';
export const TicketTagPresetUpdateOneSchema = z.object({ select: TicketTagPresetSelectObjectSchema.optional(), data: z.union([TicketTagPresetUpdateInputObjectSchema, TicketTagPresetUncheckedUpdateInputObjectSchema]), where: TicketTagPresetWhereUniqueInputObjectSchema }).strict();
export const TicketTagPresetUpdateOneZodSchema = z.object({ select: TicketTagPresetSelectObjectSchema.optional(), data: z.union([TicketTagPresetUpdateInputObjectSchema, TicketTagPresetUncheckedUpdateInputObjectSchema]), where: TicketTagPresetWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=updateOneTicketTagPreset.schema.js.map