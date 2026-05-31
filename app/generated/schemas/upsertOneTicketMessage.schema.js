import * as z from 'zod';
import { TicketMessageSelectObjectSchema as TicketMessageSelectObjectSchema } from './objects/TicketMessageSelect.schema';
import { TicketMessageIncludeObjectSchema as TicketMessageIncludeObjectSchema } from './objects/TicketMessageInclude.schema';
import { TicketMessageWhereUniqueInputObjectSchema as TicketMessageWhereUniqueInputObjectSchema } from './objects/TicketMessageWhereUniqueInput.schema';
import { TicketMessageCreateInputObjectSchema as TicketMessageCreateInputObjectSchema } from './objects/TicketMessageCreateInput.schema';
import { TicketMessageUncheckedCreateInputObjectSchema as TicketMessageUncheckedCreateInputObjectSchema } from './objects/TicketMessageUncheckedCreateInput.schema';
import { TicketMessageUpdateInputObjectSchema as TicketMessageUpdateInputObjectSchema } from './objects/TicketMessageUpdateInput.schema';
import { TicketMessageUncheckedUpdateInputObjectSchema as TicketMessageUncheckedUpdateInputObjectSchema } from './objects/TicketMessageUncheckedUpdateInput.schema';
export const TicketMessageUpsertOneSchema = z.object({ select: TicketMessageSelectObjectSchema.optional(), include: TicketMessageIncludeObjectSchema.optional(), where: TicketMessageWhereUniqueInputObjectSchema, create: z.union([TicketMessageCreateInputObjectSchema, TicketMessageUncheckedCreateInputObjectSchema]), update: z.union([TicketMessageUpdateInputObjectSchema, TicketMessageUncheckedUpdateInputObjectSchema]) }).strict();
export const TicketMessageUpsertOneZodSchema = z.object({ select: TicketMessageSelectObjectSchema.optional(), include: TicketMessageIncludeObjectSchema.optional(), where: TicketMessageWhereUniqueInputObjectSchema, create: z.union([TicketMessageCreateInputObjectSchema, TicketMessageUncheckedCreateInputObjectSchema]), update: z.union([TicketMessageUpdateInputObjectSchema, TicketMessageUncheckedUpdateInputObjectSchema]) }).strict();
//# sourceMappingURL=upsertOneTicketMessage.schema.js.map