import * as z from 'zod';
import { TicketSelectObjectSchema as TicketSelectObjectSchema } from './objects/TicketSelect.schema';
import { TicketIncludeObjectSchema as TicketIncludeObjectSchema } from './objects/TicketInclude.schema';
import { TicketCreateInputObjectSchema as TicketCreateInputObjectSchema } from './objects/TicketCreateInput.schema';
import { TicketUncheckedCreateInputObjectSchema as TicketUncheckedCreateInputObjectSchema } from './objects/TicketUncheckedCreateInput.schema';
export const TicketCreateOneSchema = z.object({ select: TicketSelectObjectSchema.optional(), include: TicketIncludeObjectSchema.optional(), data: z.union([TicketCreateInputObjectSchema, TicketUncheckedCreateInputObjectSchema]) }).strict();
export const TicketCreateOneZodSchema = z.object({ select: TicketSelectObjectSchema.optional(), include: TicketIncludeObjectSchema.optional(), data: z.union([TicketCreateInputObjectSchema, TicketUncheckedCreateInputObjectSchema]) }).strict();
//# sourceMappingURL=createOneTicket.schema.js.map