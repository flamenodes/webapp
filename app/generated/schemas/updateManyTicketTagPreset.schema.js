import * as z from 'zod';
import { TicketTagPresetUpdateManyMutationInputObjectSchema as TicketTagPresetUpdateManyMutationInputObjectSchema } from './objects/TicketTagPresetUpdateManyMutationInput.schema';
import { TicketTagPresetWhereInputObjectSchema as TicketTagPresetWhereInputObjectSchema } from './objects/TicketTagPresetWhereInput.schema';
export const TicketTagPresetUpdateManySchema = z.object({ data: TicketTagPresetUpdateManyMutationInputObjectSchema, where: TicketTagPresetWhereInputObjectSchema.optional() }).strict();
export const TicketTagPresetUpdateManyZodSchema = z.object({ data: TicketTagPresetUpdateManyMutationInputObjectSchema, where: TicketTagPresetWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyTicketTagPreset.schema.js.map