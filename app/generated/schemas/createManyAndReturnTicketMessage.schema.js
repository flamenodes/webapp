import * as z from 'zod';
import { TicketMessageSelectObjectSchema as TicketMessageSelectObjectSchema } from './objects/TicketMessageSelect.schema';
import { TicketMessageCreateManyInputObjectSchema as TicketMessageCreateManyInputObjectSchema } from './objects/TicketMessageCreateManyInput.schema';
export const TicketMessageCreateManyAndReturnSchema = z.object({ select: TicketMessageSelectObjectSchema.optional(), data: z.union([TicketMessageCreateManyInputObjectSchema, z.array(TicketMessageCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const TicketMessageCreateManyAndReturnZodSchema = z.object({ select: TicketMessageSelectObjectSchema.optional(), data: z.union([TicketMessageCreateManyInputObjectSchema, z.array(TicketMessageCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyAndReturnTicketMessage.schema.js.map