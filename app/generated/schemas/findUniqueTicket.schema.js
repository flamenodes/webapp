import * as z from 'zod';
import { TicketSelectObjectSchema as TicketSelectObjectSchema } from './objects/TicketSelect.schema';
import { TicketIncludeObjectSchema as TicketIncludeObjectSchema } from './objects/TicketInclude.schema';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './objects/TicketWhereUniqueInput.schema';
export const TicketFindUniqueSchema = z.object({ select: TicketSelectObjectSchema.optional(), include: TicketIncludeObjectSchema.optional(), where: TicketWhereUniqueInputObjectSchema }).strict();
export const TicketFindUniqueZodSchema = z.object({ select: TicketSelectObjectSchema.optional(), include: TicketIncludeObjectSchema.optional(), where: TicketWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=findUniqueTicket.schema.js.map