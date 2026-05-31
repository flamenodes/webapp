import * as z from 'zod';
import { TicketMessageUpdateManyMutationInputObjectSchema as TicketMessageUpdateManyMutationInputObjectSchema } from './objects/TicketMessageUpdateManyMutationInput.schema';
import { TicketMessageWhereInputObjectSchema as TicketMessageWhereInputObjectSchema } from './objects/TicketMessageWhereInput.schema';
export const TicketMessageUpdateManySchema = z.object({ data: TicketMessageUpdateManyMutationInputObjectSchema, where: TicketMessageWhereInputObjectSchema.optional() }).strict();
export const TicketMessageUpdateManyZodSchema = z.object({ data: TicketMessageUpdateManyMutationInputObjectSchema, where: TicketMessageWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyTicketMessage.schema.js.map