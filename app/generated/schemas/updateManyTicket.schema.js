import * as z from 'zod';
import { TicketUpdateManyMutationInputObjectSchema as TicketUpdateManyMutationInputObjectSchema } from './objects/TicketUpdateManyMutationInput.schema';
import { TicketWhereInputObjectSchema as TicketWhereInputObjectSchema } from './objects/TicketWhereInput.schema';
export const TicketUpdateManySchema = z.object({ data: TicketUpdateManyMutationInputObjectSchema, where: TicketWhereInputObjectSchema.optional() }).strict();
export const TicketUpdateManyZodSchema = z.object({ data: TicketUpdateManyMutationInputObjectSchema, where: TicketWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyTicket.schema.js.map