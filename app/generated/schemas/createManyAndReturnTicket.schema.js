import * as z from 'zod';
import { TicketSelectObjectSchema as TicketSelectObjectSchema } from './objects/TicketSelect.schema';
import { TicketCreateManyInputObjectSchema as TicketCreateManyInputObjectSchema } from './objects/TicketCreateManyInput.schema';
export const TicketCreateManyAndReturnSchema = z.object({ select: TicketSelectObjectSchema.optional(), data: z.union([TicketCreateManyInputObjectSchema, z.array(TicketCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const TicketCreateManyAndReturnZodSchema = z.object({ select: TicketSelectObjectSchema.optional(), data: z.union([TicketCreateManyInputObjectSchema, z.array(TicketCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyAndReturnTicket.schema.js.map