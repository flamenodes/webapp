import * as z from 'zod';
import { TicketCounterSelectObjectSchema as TicketCounterSelectObjectSchema } from './objects/TicketCounterSelect.schema';
import { TicketCounterCreateInputObjectSchema as TicketCounterCreateInputObjectSchema } from './objects/TicketCounterCreateInput.schema';
import { TicketCounterUncheckedCreateInputObjectSchema as TicketCounterUncheckedCreateInputObjectSchema } from './objects/TicketCounterUncheckedCreateInput.schema';
export const TicketCounterCreateOneSchema = z.object({ select: TicketCounterSelectObjectSchema.optional(), data: z.union([TicketCounterCreateInputObjectSchema, TicketCounterUncheckedCreateInputObjectSchema]) }).strict();
export const TicketCounterCreateOneZodSchema = z.object({ select: TicketCounterSelectObjectSchema.optional(), data: z.union([TicketCounterCreateInputObjectSchema, TicketCounterUncheckedCreateInputObjectSchema]) }).strict();
//# sourceMappingURL=createOneTicketCounter.schema.js.map