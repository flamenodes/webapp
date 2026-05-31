import * as z from 'zod';
import { TicketCounterOrderByWithRelationInputObjectSchema as TicketCounterOrderByWithRelationInputObjectSchema } from './objects/TicketCounterOrderByWithRelationInput.schema';
import { TicketCounterWhereInputObjectSchema as TicketCounterWhereInputObjectSchema } from './objects/TicketCounterWhereInput.schema';
import { TicketCounterWhereUniqueInputObjectSchema as TicketCounterWhereUniqueInputObjectSchema } from './objects/TicketCounterWhereUniqueInput.schema';
import { TicketCounterScalarFieldEnumSchema } from './enums/TicketCounterScalarFieldEnum.schema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const TicketCounterFindFirstSelectSchema = z.object({
    id: z.boolean().optional(),
    seq: z.boolean().optional()
}).strict();
export const TicketCounterFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    seq: z.boolean().optional()
}).strict();
export const TicketCounterFindFirstSchema = z.object({ select: TicketCounterFindFirstSelectSchema.optional(), orderBy: z.union([TicketCounterOrderByWithRelationInputObjectSchema, TicketCounterOrderByWithRelationInputObjectSchema.array()]).optional(), where: TicketCounterWhereInputObjectSchema.optional(), cursor: TicketCounterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TicketCounterScalarFieldEnumSchema, TicketCounterScalarFieldEnumSchema.array()]).optional() }).strict();
export const TicketCounterFindFirstZodSchema = z.object({ select: TicketCounterFindFirstSelectSchema.optional(), orderBy: z.union([TicketCounterOrderByWithRelationInputObjectSchema, TicketCounterOrderByWithRelationInputObjectSchema.array()]).optional(), where: TicketCounterWhereInputObjectSchema.optional(), cursor: TicketCounterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TicketCounterScalarFieldEnumSchema, TicketCounterScalarFieldEnumSchema.array()]).optional() }).strict();
//# sourceMappingURL=findFirstTicketCounter.schema.js.map