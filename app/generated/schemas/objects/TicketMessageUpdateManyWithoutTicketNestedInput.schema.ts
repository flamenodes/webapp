import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { TicketMessageCreateWithoutTicketInputObjectSchema as TicketMessageCreateWithoutTicketInputObjectSchema } from './TicketMessageCreateWithoutTicketInput.schema';
import { TicketMessageUncheckedCreateWithoutTicketInputObjectSchema as TicketMessageUncheckedCreateWithoutTicketInputObjectSchema } from './TicketMessageUncheckedCreateWithoutTicketInput.schema';
import { TicketMessageCreateOrConnectWithoutTicketInputObjectSchema as TicketMessageCreateOrConnectWithoutTicketInputObjectSchema } from './TicketMessageCreateOrConnectWithoutTicketInput.schema';
import { TicketMessageUpsertWithWhereUniqueWithoutTicketInputObjectSchema as TicketMessageUpsertWithWhereUniqueWithoutTicketInputObjectSchema } from './TicketMessageUpsertWithWhereUniqueWithoutTicketInput.schema';
import { TicketMessageCreateManyTicketInputEnvelopeObjectSchema as TicketMessageCreateManyTicketInputEnvelopeObjectSchema } from './TicketMessageCreateManyTicketInputEnvelope.schema';
import { TicketMessageWhereUniqueInputObjectSchema as TicketMessageWhereUniqueInputObjectSchema } from './TicketMessageWhereUniqueInput.schema';
import { TicketMessageUpdateWithWhereUniqueWithoutTicketInputObjectSchema as TicketMessageUpdateWithWhereUniqueWithoutTicketInputObjectSchema } from './TicketMessageUpdateWithWhereUniqueWithoutTicketInput.schema';
import { TicketMessageUpdateManyWithWhereWithoutTicketInputObjectSchema as TicketMessageUpdateManyWithWhereWithoutTicketInputObjectSchema } from './TicketMessageUpdateManyWithWhereWithoutTicketInput.schema';
import { TicketMessageScalarWhereInputObjectSchema as TicketMessageScalarWhereInputObjectSchema } from './TicketMessageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TicketMessageCreateWithoutTicketInputObjectSchema), z.lazy(() => TicketMessageCreateWithoutTicketInputObjectSchema).array(), z.lazy(() => TicketMessageUncheckedCreateWithoutTicketInputObjectSchema), z.lazy(() => TicketMessageUncheckedCreateWithoutTicketInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TicketMessageCreateOrConnectWithoutTicketInputObjectSchema), z.lazy(() => TicketMessageCreateOrConnectWithoutTicketInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TicketMessageUpsertWithWhereUniqueWithoutTicketInputObjectSchema), z.lazy(() => TicketMessageUpsertWithWhereUniqueWithoutTicketInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TicketMessageCreateManyTicketInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TicketMessageWhereUniqueInputObjectSchema), z.lazy(() => TicketMessageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TicketMessageWhereUniqueInputObjectSchema), z.lazy(() => TicketMessageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TicketMessageWhereUniqueInputObjectSchema), z.lazy(() => TicketMessageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TicketMessageWhereUniqueInputObjectSchema), z.lazy(() => TicketMessageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TicketMessageUpdateWithWhereUniqueWithoutTicketInputObjectSchema), z.lazy(() => TicketMessageUpdateWithWhereUniqueWithoutTicketInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TicketMessageUpdateManyWithWhereWithoutTicketInputObjectSchema), z.lazy(() => TicketMessageUpdateManyWithWhereWithoutTicketInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TicketMessageScalarWhereInputObjectSchema), z.lazy(() => TicketMessageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TicketMessageUpdateManyWithoutTicketNestedInputObjectSchema: z.ZodType<Prisma.TicketMessageUpdateManyWithoutTicketNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageUpdateManyWithoutTicketNestedInput>;
export const TicketMessageUpdateManyWithoutTicketNestedInputObjectZodSchema = makeSchema();
