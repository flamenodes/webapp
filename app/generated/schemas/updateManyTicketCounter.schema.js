import * as z from 'zod';
import { TicketCounterUpdateManyMutationInputObjectSchema as TicketCounterUpdateManyMutationInputObjectSchema } from './objects/TicketCounterUpdateManyMutationInput.schema';
import { TicketCounterWhereInputObjectSchema as TicketCounterWhereInputObjectSchema } from './objects/TicketCounterWhereInput.schema';
export const TicketCounterUpdateManySchema = z.object({ data: TicketCounterUpdateManyMutationInputObjectSchema, where: TicketCounterWhereInputObjectSchema.optional() }).strict();
export const TicketCounterUpdateManyZodSchema = z.object({ data: TicketCounterUpdateManyMutationInputObjectSchema, where: TicketCounterWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyTicketCounter.schema.js.map