import * as z from 'zod';
import { TicketSelectObjectSchema as TicketSelectObjectSchema } from './objects/TicketSelect.schema';
import { TicketUpdateManyMutationInputObjectSchema as TicketUpdateManyMutationInputObjectSchema } from './objects/TicketUpdateManyMutationInput.schema';
import { TicketWhereInputObjectSchema as TicketWhereInputObjectSchema } from './objects/TicketWhereInput.schema';
export const TicketUpdateManyAndReturnSchema = z.object({ select: TicketSelectObjectSchema.optional(), data: TicketUpdateManyMutationInputObjectSchema, where: TicketWhereInputObjectSchema.optional() }).strict();
export const TicketUpdateManyAndReturnZodSchema = z.object({ select: TicketSelectObjectSchema.optional(), data: TicketUpdateManyMutationInputObjectSchema, where: TicketWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyAndReturnTicket.schema.js.map