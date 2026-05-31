import * as z from 'zod';
import { TicketCounterSelectObjectSchema as TicketCounterSelectObjectSchema } from './objects/TicketCounterSelect.schema';
import { TicketCounterUpdateManyMutationInputObjectSchema as TicketCounterUpdateManyMutationInputObjectSchema } from './objects/TicketCounterUpdateManyMutationInput.schema';
import { TicketCounterWhereInputObjectSchema as TicketCounterWhereInputObjectSchema } from './objects/TicketCounterWhereInput.schema';
export const TicketCounterUpdateManyAndReturnSchema = z.object({ select: TicketCounterSelectObjectSchema.optional(), data: TicketCounterUpdateManyMutationInputObjectSchema, where: TicketCounterWhereInputObjectSchema.optional() }).strict();
export const TicketCounterUpdateManyAndReturnZodSchema = z.object({ select: TicketCounterSelectObjectSchema.optional(), data: TicketCounterUpdateManyMutationInputObjectSchema, where: TicketCounterWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyAndReturnTicketCounter.schema.js.map