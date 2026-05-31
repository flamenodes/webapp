import * as z from 'zod';
import { TicketCounterWhereInputObjectSchema as TicketCounterWhereInputObjectSchema } from './objects/TicketCounterWhereInput.schema';
export const TicketCounterDeleteManySchema = z.object({ where: TicketCounterWhereInputObjectSchema.optional() }).strict();
export const TicketCounterDeleteManyZodSchema = z.object({ where: TicketCounterWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=deleteManyTicketCounter.schema.js.map