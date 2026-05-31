import * as z from 'zod';
import { TicketMessageSelectObjectSchema as TicketMessageSelectObjectSchema } from './objects/TicketMessageSelect.schema';
import { TicketMessageUpdateManyMutationInputObjectSchema as TicketMessageUpdateManyMutationInputObjectSchema } from './objects/TicketMessageUpdateManyMutationInput.schema';
import { TicketMessageWhereInputObjectSchema as TicketMessageWhereInputObjectSchema } from './objects/TicketMessageWhereInput.schema';
export const TicketMessageUpdateManyAndReturnSchema = z.object({ select: TicketMessageSelectObjectSchema.optional(), data: TicketMessageUpdateManyMutationInputObjectSchema, where: TicketMessageWhereInputObjectSchema.optional() }).strict();
export const TicketMessageUpdateManyAndReturnZodSchema = z.object({ select: TicketMessageSelectObjectSchema.optional(), data: TicketMessageUpdateManyMutationInputObjectSchema, where: TicketMessageWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyAndReturnTicketMessage.schema.js.map