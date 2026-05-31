import * as z from 'zod';
import { TicketCounterSelectObjectSchema as TicketCounterSelectObjectSchema } from './objects/TicketCounterSelect.schema';
import { TicketCounterWhereUniqueInputObjectSchema as TicketCounterWhereUniqueInputObjectSchema } from './objects/TicketCounterWhereUniqueInput.schema';
export const TicketCounterFindUniqueSchema = z.object({ select: TicketCounterSelectObjectSchema.optional(), where: TicketCounterWhereUniqueInputObjectSchema }).strict();
export const TicketCounterFindUniqueZodSchema = z.object({ select: TicketCounterSelectObjectSchema.optional(), where: TicketCounterWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=findUniqueTicketCounter.schema.js.map