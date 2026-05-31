import * as z from 'zod';
import { TicketMessageWhereInputObjectSchema as TicketMessageWhereInputObjectSchema } from './objects/TicketMessageWhereInput.schema';
export const TicketMessageDeleteManySchema = z.object({ where: TicketMessageWhereInputObjectSchema.optional() }).strict();
export const TicketMessageDeleteManyZodSchema = z.object({ where: TicketMessageWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=deleteManyTicketMessage.schema.js.map