import * as z from 'zod';
import { TicketCounterCreateManyInputObjectSchema as TicketCounterCreateManyInputObjectSchema } from './objects/TicketCounterCreateManyInput.schema';
export const TicketCounterCreateManySchema = z.object({ data: z.union([TicketCounterCreateManyInputObjectSchema, z.array(TicketCounterCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const TicketCounterCreateManyZodSchema = z.object({ data: z.union([TicketCounterCreateManyInputObjectSchema, z.array(TicketCounterCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyTicketCounter.schema.js.map