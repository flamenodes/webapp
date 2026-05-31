import * as z from 'zod';
import { TicketCounterSelectObjectSchema as TicketCounterSelectObjectSchema } from './objects/TicketCounterSelect.schema';
import { TicketCounterWhereUniqueInputObjectSchema as TicketCounterWhereUniqueInputObjectSchema } from './objects/TicketCounterWhereUniqueInput.schema';
export const TicketCounterDeleteOneSchema = z.object({ select: TicketCounterSelectObjectSchema.optional(), where: TicketCounterWhereUniqueInputObjectSchema }).strict();
export const TicketCounterDeleteOneZodSchema = z.object({ select: TicketCounterSelectObjectSchema.optional(), where: TicketCounterWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=deleteOneTicketCounter.schema.js.map