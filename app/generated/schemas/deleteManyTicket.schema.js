import * as z from 'zod';
import { TicketWhereInputObjectSchema as TicketWhereInputObjectSchema } from './objects/TicketWhereInput.schema';
export const TicketDeleteManySchema = z.object({ where: TicketWhereInputObjectSchema.optional() }).strict();
export const TicketDeleteManyZodSchema = z.object({ where: TicketWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=deleteManyTicket.schema.js.map