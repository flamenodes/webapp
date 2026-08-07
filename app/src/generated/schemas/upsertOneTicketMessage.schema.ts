import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { TicketMessageSelectObjectSchema as TicketMessageSelectObjectSchema } from './objects/TicketMessageSelect.schema';
import { TicketMessageIncludeObjectSchema as TicketMessageIncludeObjectSchema } from './objects/TicketMessageInclude.schema';
import { TicketMessageWhereUniqueInputObjectSchema as TicketMessageWhereUniqueInputObjectSchema } from './objects/TicketMessageWhereUniqueInput.schema';
import { TicketMessageCreateInputObjectSchema as TicketMessageCreateInputObjectSchema } from './objects/TicketMessageCreateInput.schema';
import { TicketMessageUncheckedCreateInputObjectSchema as TicketMessageUncheckedCreateInputObjectSchema } from './objects/TicketMessageUncheckedCreateInput.schema';
import { TicketMessageUpdateInputObjectSchema as TicketMessageUpdateInputObjectSchema } from './objects/TicketMessageUpdateInput.schema';
import { TicketMessageUncheckedUpdateInputObjectSchema as TicketMessageUncheckedUpdateInputObjectSchema } from './objects/TicketMessageUncheckedUpdateInput.schema';

export const TicketMessageUpsertOneSchema: z.ZodType<Prisma.TicketMessageUpsertArgs> = z.object({ select: TicketMessageSelectObjectSchema.optional(), include: TicketMessageIncludeObjectSchema.optional(), where: TicketMessageWhereUniqueInputObjectSchema, create: z.union([ TicketMessageCreateInputObjectSchema, TicketMessageUncheckedCreateInputObjectSchema ]), update: z.union([ TicketMessageUpdateInputObjectSchema, TicketMessageUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TicketMessageUpsertArgs>;

export const TicketMessageUpsertOneZodSchema = z.object({ select: TicketMessageSelectObjectSchema.optional(), include: TicketMessageIncludeObjectSchema.optional(), where: TicketMessageWhereUniqueInputObjectSchema, create: z.union([ TicketMessageCreateInputObjectSchema, TicketMessageUncheckedCreateInputObjectSchema ]), update: z.union([ TicketMessageUpdateInputObjectSchema, TicketMessageUncheckedUpdateInputObjectSchema ]) }).strict();