import * as z from 'zod';
import { TicketCounterSelectObjectSchema as TicketCounterSelectObjectSchema } from './objects/TicketCounterSelect.schema';
import { TicketCounterWhereUniqueInputObjectSchema as TicketCounterWhereUniqueInputObjectSchema } from './objects/TicketCounterWhereUniqueInput.schema';
import { TicketCounterCreateInputObjectSchema as TicketCounterCreateInputObjectSchema } from './objects/TicketCounterCreateInput.schema';
import { TicketCounterUncheckedCreateInputObjectSchema as TicketCounterUncheckedCreateInputObjectSchema } from './objects/TicketCounterUncheckedCreateInput.schema';
import { TicketCounterUpdateInputObjectSchema as TicketCounterUpdateInputObjectSchema } from './objects/TicketCounterUpdateInput.schema';
import { TicketCounterUncheckedUpdateInputObjectSchema as TicketCounterUncheckedUpdateInputObjectSchema } from './objects/TicketCounterUncheckedUpdateInput.schema';
export const TicketCounterUpsertOneSchema = z.object({ select: TicketCounterSelectObjectSchema.optional(), where: TicketCounterWhereUniqueInputObjectSchema, create: z.union([TicketCounterCreateInputObjectSchema, TicketCounterUncheckedCreateInputObjectSchema]), update: z.union([TicketCounterUpdateInputObjectSchema, TicketCounterUncheckedUpdateInputObjectSchema]) }).strict();
export const TicketCounterUpsertOneZodSchema = z.object({ select: TicketCounterSelectObjectSchema.optional(), where: TicketCounterWhereUniqueInputObjectSchema, create: z.union([TicketCounterCreateInputObjectSchema, TicketCounterUncheckedCreateInputObjectSchema]), update: z.union([TicketCounterUpdateInputObjectSchema, TicketCounterUncheckedUpdateInputObjectSchema]) }).strict();
//# sourceMappingURL=upsertOneTicketCounter.schema.js.map