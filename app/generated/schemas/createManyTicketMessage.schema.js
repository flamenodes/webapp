import * as z from 'zod';
import { TicketMessageCreateManyInputObjectSchema as TicketMessageCreateManyInputObjectSchema } from './objects/TicketMessageCreateManyInput.schema';
export const TicketMessageCreateManySchema = z.object({ data: z.union([TicketMessageCreateManyInputObjectSchema, z.array(TicketMessageCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const TicketMessageCreateManyZodSchema = z.object({ data: z.union([TicketMessageCreateManyInputObjectSchema, z.array(TicketMessageCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyTicketMessage.schema.js.map