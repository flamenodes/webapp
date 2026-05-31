import * as z from 'zod';
import { TicketCounterSelectObjectSchema as TicketCounterSelectObjectSchema } from './objects/TicketCounterSelect.schema';
import { TicketCounterWhereUniqueInputObjectSchema as TicketCounterWhereUniqueInputObjectSchema } from './objects/TicketCounterWhereUniqueInput.schema';
export const TicketCounterFindUniqueOrThrowSchema = z.object({ select: TicketCounterSelectObjectSchema.optional(), where: TicketCounterWhereUniqueInputObjectSchema }).strict();
export const TicketCounterFindUniqueOrThrowZodSchema = z.object({ select: TicketCounterSelectObjectSchema.optional(), where: TicketCounterWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=findUniqueOrThrowTicketCounter.schema.js.map