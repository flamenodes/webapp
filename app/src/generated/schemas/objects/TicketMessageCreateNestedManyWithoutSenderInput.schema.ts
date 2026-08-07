import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { TicketMessageCreateWithoutSenderInputObjectSchema as TicketMessageCreateWithoutSenderInputObjectSchema } from './TicketMessageCreateWithoutSenderInput.schema';
import { TicketMessageUncheckedCreateWithoutSenderInputObjectSchema as TicketMessageUncheckedCreateWithoutSenderInputObjectSchema } from './TicketMessageUncheckedCreateWithoutSenderInput.schema';
import { TicketMessageCreateOrConnectWithoutSenderInputObjectSchema as TicketMessageCreateOrConnectWithoutSenderInputObjectSchema } from './TicketMessageCreateOrConnectWithoutSenderInput.schema';
import { TicketMessageCreateManySenderInputEnvelopeObjectSchema as TicketMessageCreateManySenderInputEnvelopeObjectSchema } from './TicketMessageCreateManySenderInputEnvelope.schema';
import { TicketMessageWhereUniqueInputObjectSchema as TicketMessageWhereUniqueInputObjectSchema } from './TicketMessageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TicketMessageCreateWithoutSenderInputObjectSchema), z.lazy(() => TicketMessageCreateWithoutSenderInputObjectSchema).array(), z.lazy(() => TicketMessageUncheckedCreateWithoutSenderInputObjectSchema), z.lazy(() => TicketMessageUncheckedCreateWithoutSenderInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TicketMessageCreateOrConnectWithoutSenderInputObjectSchema), z.lazy(() => TicketMessageCreateOrConnectWithoutSenderInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TicketMessageCreateManySenderInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TicketMessageWhereUniqueInputObjectSchema), z.lazy(() => TicketMessageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TicketMessageCreateNestedManyWithoutSenderInputObjectSchema: z.ZodType<Prisma.TicketMessageCreateNestedManyWithoutSenderInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageCreateNestedManyWithoutSenderInput>;
export const TicketMessageCreateNestedManyWithoutSenderInputObjectZodSchema = makeSchema();
