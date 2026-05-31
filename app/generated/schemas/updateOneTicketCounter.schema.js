import * as z from 'zod';
import { TicketCounterSelectObjectSchema as TicketCounterSelectObjectSchema } from './objects/TicketCounterSelect.schema';
import { TicketCounterUpdateInputObjectSchema as TicketCounterUpdateInputObjectSchema } from './objects/TicketCounterUpdateInput.schema';
import { TicketCounterUncheckedUpdateInputObjectSchema as TicketCounterUncheckedUpdateInputObjectSchema } from './objects/TicketCounterUncheckedUpdateInput.schema';
import { TicketCounterWhereUniqueInputObjectSchema as TicketCounterWhereUniqueInputObjectSchema } from './objects/TicketCounterWhereUniqueInput.schema';
export const TicketCounterUpdateOneSchema = z.object({ select: TicketCounterSelectObjectSchema.optional(), data: z.union([TicketCounterUpdateInputObjectSchema, TicketCounterUncheckedUpdateInputObjectSchema]), where: TicketCounterWhereUniqueInputObjectSchema }).strict();
export const TicketCounterUpdateOneZodSchema = z.object({ select: TicketCounterSelectObjectSchema.optional(), data: z.union([TicketCounterUpdateInputObjectSchema, TicketCounterUncheckedUpdateInputObjectSchema]), where: TicketCounterWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=updateOneTicketCounter.schema.js.map