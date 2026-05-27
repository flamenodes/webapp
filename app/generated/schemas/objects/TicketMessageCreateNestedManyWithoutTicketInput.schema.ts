import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { TicketMessageCreateWithoutTicketInputObjectSchema as TicketMessageCreateWithoutTicketInputObjectSchema } from './TicketMessageCreateWithoutTicketInput.schema';
import { TicketMessageUncheckedCreateWithoutTicketInputObjectSchema as TicketMessageUncheckedCreateWithoutTicketInputObjectSchema } from './TicketMessageUncheckedCreateWithoutTicketInput.schema';
import { TicketMessageCreateOrConnectWithoutTicketInputObjectSchema as TicketMessageCreateOrConnectWithoutTicketInputObjectSchema } from './TicketMessageCreateOrConnectWithoutTicketInput.schema';
import { TicketMessageCreateManyTicketInputEnvelopeObjectSchema as TicketMessageCreateManyTicketInputEnvelopeObjectSchema } from './TicketMessageCreateManyTicketInputEnvelope.schema';
import { TicketMessageWhereUniqueInputObjectSchema as TicketMessageWhereUniqueInputObjectSchema } from './TicketMessageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TicketMessageCreateWithoutTicketInputObjectSchema), z.lazy(() => TicketMessageCreateWithoutTicketInputObjectSchema).array(), z.lazy(() => TicketMessageUncheckedCreateWithoutTicketInputObjectSchema), z.lazy(() => TicketMessageUncheckedCreateWithoutTicketInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TicketMessageCreateOrConnectWithoutTicketInputObjectSchema), z.lazy(() => TicketMessageCreateOrConnectWithoutTicketInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TicketMessageCreateManyTicketInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TicketMessageWhereUniqueInputObjectSchema), z.lazy(() => TicketMessageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TicketMessageCreateNestedManyWithoutTicketInputObjectSchema: z.ZodType<Prisma.TicketMessageCreateNestedManyWithoutTicketInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageCreateNestedManyWithoutTicketInput>;
export const TicketMessageCreateNestedManyWithoutTicketInputObjectZodSchema = makeSchema();
