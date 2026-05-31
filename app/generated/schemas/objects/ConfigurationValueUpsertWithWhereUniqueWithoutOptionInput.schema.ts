import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { ConfigurationValueWhereUniqueInputObjectSchema as ConfigurationValueWhereUniqueInputObjectSchema } from './ConfigurationValueWhereUniqueInput.schema';
import { ConfigurationValueUpdateWithoutOptionInputObjectSchema as ConfigurationValueUpdateWithoutOptionInputObjectSchema } from './ConfigurationValueUpdateWithoutOptionInput.schema';
import { ConfigurationValueUncheckedUpdateWithoutOptionInputObjectSchema as ConfigurationValueUncheckedUpdateWithoutOptionInputObjectSchema } from './ConfigurationValueUncheckedUpdateWithoutOptionInput.schema';
import { ConfigurationValueCreateWithoutOptionInputObjectSchema as ConfigurationValueCreateWithoutOptionInputObjectSchema } from './ConfigurationValueCreateWithoutOptionInput.schema';
import { ConfigurationValueUncheckedCreateWithoutOptionInputObjectSchema as ConfigurationValueUncheckedCreateWithoutOptionInputObjectSchema } from './ConfigurationValueUncheckedCreateWithoutOptionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConfigurationValueWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ConfigurationValueUpdateWithoutOptionInputObjectSchema), z.lazy(() => ConfigurationValueUncheckedUpdateWithoutOptionInputObjectSchema)]),
  create: z.union([z.lazy(() => ConfigurationValueCreateWithoutOptionInputObjectSchema), z.lazy(() => ConfigurationValueUncheckedCreateWithoutOptionInputObjectSchema)])
}).strict();
export const ConfigurationValueUpsertWithWhereUniqueWithoutOptionInputObjectSchema: z.ZodType<Prisma.ConfigurationValueUpsertWithWhereUniqueWithoutOptionInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationValueUpsertWithWhereUniqueWithoutOptionInput>;
export const ConfigurationValueUpsertWithWhereUniqueWithoutOptionInputObjectZodSchema = makeSchema();
