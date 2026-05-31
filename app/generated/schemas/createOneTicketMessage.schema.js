import * as z from 'zod';
import { TicketMessageSelectObjectSchema as TicketMessageSelectObjectSchema } from './objects/TicketMessageSelect.schema';
import { TicketMessageIncludeObjectSchema as TicketMessageIncludeObjectSchema } from './objects/TicketMessageInclude.schema';
import { TicketMessageCreateInputObjectSchema as TicketMessageCreateInputObjectSchema } from './objects/TicketMessageCreateInput.schema';
import { TicketMessageUncheckedCreateInputObjectSchema as TicketMessageUncheckedCreateInputObjectSchema } from './objects/TicketMessageUncheckedCreateInput.schema';
export const TicketMessageCreateOneSchema = z.object({ select: TicketMessageSelectObjectSchema.optional(), include: TicketMessageIncludeObjectSchema.optional(), data: z.union([TicketMessageCreateInputObjectSchema, TicketMessageUncheckedCreateInputObjectSchema]) }).strict();
export const TicketMessageCreateOneZodSchema = z.object({ select: TicketMessageSelectObjectSchema.optional(), include: TicketMessageIncludeObjectSchema.optional(), data: z.union([TicketMessageCreateInputObjectSchema, TicketMessageUncheckedCreateInputObjectSchema]) }).strict();
//# sourceMappingURL=createOneTicketMessage.schema.js.map