import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ConfigurationValueCreateWithoutOptionInputObjectSchema as ConfigurationValueCreateWithoutOptionInputObjectSchema } from './ConfigurationValueCreateWithoutOptionInput.schema';
import { ConfigurationValueUncheckedCreateWithoutOptionInputObjectSchema as ConfigurationValueUncheckedCreateWithoutOptionInputObjectSchema } from './ConfigurationValueUncheckedCreateWithoutOptionInput.schema';
import { ConfigurationValueCreateOrConnectWithoutOptionInputObjectSchema as ConfigurationValueCreateOrConnectWithoutOptionInputObjectSchema } from './ConfigurationValueCreateOrConnectWithoutOptionInput.schema';
import { ConfigurationValueUpsertWithWhereUniqueWithoutOptionInputObjectSchema as ConfigurationValueUpsertWithWhereUniqueWithoutOptionInputObjectSchema } from './ConfigurationValueUpsertWithWhereUniqueWithoutOptionInput.schema';
import { ConfigurationValueCreateManyOptionInputEnvelopeObjectSchema as ConfigurationValueCreateManyOptionInputEnvelopeObjectSchema } from './ConfigurationValueCreateManyOptionInputEnvelope.schema';
import { ConfigurationValueWhereUniqueInputObjectSchema as ConfigurationValueWhereUniqueInputObjectSchema } from './ConfigurationValueWhereUniqueInput.schema';
import { ConfigurationValueUpdateWithWhereUniqueWithoutOptionInputObjectSchema as ConfigurationValueUpdateWithWhereUniqueWithoutOptionInputObjectSchema } from './ConfigurationValueUpdateWithWhereUniqueWithoutOptionInput.schema';
import { ConfigurationValueUpdateManyWithWhereWithoutOptionInputObjectSchema as ConfigurationValueUpdateManyWithWhereWithoutOptionInputObjectSchema } from './ConfigurationValueUpdateManyWithWhereWithoutOptionInput.schema';
import { ConfigurationValueScalarWhereInputObjectSchema as ConfigurationValueScalarWhereInputObjectSchema } from './ConfigurationValueScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ConfigurationValueCreateWithoutOptionInputObjectSchema), z.lazy(() => ConfigurationValueCreateWithoutOptionInputObjectSchema).array(), z.lazy(() => ConfigurationValueUncheckedCreateWithoutOptionInputObjectSchema), z.lazy(() => ConfigurationValueUncheckedCreateWithoutOptionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ConfigurationValueCreateOrConnectWithoutOptionInputObjectSchema), z.lazy(() => ConfigurationValueCreateOrConnectWithoutOptionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ConfigurationValueUpsertWithWhereUniqueWithoutOptionInputObjectSchema), z.lazy(() => ConfigurationValueUpsertWithWhereUniqueWithoutOptionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ConfigurationValueCreateManyOptionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ConfigurationValueWhereUniqueInputObjectSchema), z.lazy(() => ConfigurationValueWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ConfigurationValueWhereUniqueInputObjectSchema), z.lazy(() => ConfigurationValueWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ConfigurationValueWhereUniqueInputObjectSchema), z.lazy(() => ConfigurationValueWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ConfigurationValueWhereUniqueInputObjectSchema), z.lazy(() => ConfigurationValueWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ConfigurationValueUpdateWithWhereUniqueWithoutOptionInputObjectSchema), z.lazy(() => ConfigurationValueUpdateWithWhereUniqueWithoutOptionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ConfigurationValueUpdateManyWithWhereWithoutOptionInputObjectSchema), z.lazy(() => ConfigurationValueUpdateManyWithWhereWithoutOptionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ConfigurationValueScalarWhereInputObjectSchema), z.lazy(() => ConfigurationValueScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ConfigurationValueUpdateManyWithoutOptionNestedInputObjectSchema: z.ZodType<Prisma.ConfigurationValueUpdateManyWithoutOptionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationValueUpdateManyWithoutOptionNestedInput>;
export const ConfigurationValueUpdateManyWithoutOptionNestedInputObjectZodSchema = makeSchema();
