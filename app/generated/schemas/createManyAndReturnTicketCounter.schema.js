import * as z from 'zod';
import { TicketCounterSelectObjectSchema as TicketCounterSelectObjectSchema } from './objects/TicketCounterSelect.schema';
import { TicketCounterCreateManyInputObjectSchema as TicketCounterCreateManyInputObjectSchema } from './objects/TicketCounterCreateManyInput.schema';
export const TicketCounterCreateManyAndReturnSchema = z.object({ select: TicketCounterSelectObjectSchema.optional(), data: z.union([TicketCounterCreateManyInputObjectSchema, z.array(TicketCounterCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const TicketCounterCreateManyAndReturnZodSchema = z.object({ select: TicketCounterSelectObjectSchema.optional(), data: z.union([TicketCounterCreateManyInputObjectSchema, z.array(TicketCounterCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyAndReturnTicketCounter.schema.js.map