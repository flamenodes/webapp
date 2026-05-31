import * as z from 'zod';
import { TicketTagPresetSelectObjectSchema as TicketTagPresetSelectObjectSchema } from './objects/TicketTagPresetSelect.schema';
import { TicketTagPresetWhereUniqueInputObjectSchema as TicketTagPresetWhereUniqueInputObjectSchema } from './objects/TicketTagPresetWhereUniqueInput.schema';
import { TicketTagPresetCreateInputObjectSchema as TicketTagPresetCreateInputObjectSchema } from './objects/TicketTagPresetCreateInput.schema';
import { TicketTagPresetUncheckedCreateInputObjectSchema as TicketTagPresetUncheckedCreateInputObjectSchema } from './objects/TicketTagPresetUncheckedCreateInput.schema';
import { TicketTagPresetUpdateInputObjectSchema as TicketTagPresetUpdateInputObjectSchema } from './objects/TicketTagPresetUpdateInput.schema';
import { TicketTagPresetUncheckedUpdateInputObjectSchema as TicketTagPresetUncheckedUpdateInputObjectSchema } from './objects/TicketTagPresetUncheckedUpdateInput.schema';
export const TicketTagPresetUpsertOneSchema = z.object({ select: TicketTagPresetSelectObjectSchema.optional(), where: TicketTagPresetWhereUniqueInputObjectSchema, create: z.union([TicketTagPresetCreateInputObjectSchema, TicketTagPresetUncheckedCreateInputObjectSchema]), update: z.union([TicketTagPresetUpdateInputObjectSchema, TicketTagPresetUncheckedUpdateInputObjectSchema]) }).strict();
export const TicketTagPresetUpsertOneZodSchema = z.object({ select: TicketTagPresetSelectObjectSchema.optional(), where: TicketTagPresetWhereUniqueInputObjectSchema, create: z.union([TicketTagPresetCreateInputObjectSchema, TicketTagPresetUncheckedCreateInputObjectSchema]), update: z.union([TicketTagPresetUpdateInputObjectSchema, TicketTagPresetUncheckedUpdateInputObjectSchema]) }).strict();
//# sourceMappingURL=upsertOneTicketTagPreset.schema.js.map