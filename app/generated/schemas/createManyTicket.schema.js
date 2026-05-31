import * as z from 'zod';
import { TicketCreateManyInputObjectSchema as TicketCreateManyInputObjectSchema } from './objects/TicketCreateManyInput.schema';
export const TicketCreateManySchema = z.object({ data: z.union([TicketCreateManyInputObjectSchema, z.array(TicketCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const TicketCreateManyZodSchema = z.object({ data: z.union([TicketCreateManyInputObjectSchema, z.array(TicketCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyTicket.schema.js.map