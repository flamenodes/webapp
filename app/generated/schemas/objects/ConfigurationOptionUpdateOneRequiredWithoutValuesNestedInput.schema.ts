import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { ConfigurationOptionCreateWithoutValuesInputObjectSchema as ConfigurationOptionCreateWithoutValuesInputObjectSchema } from './ConfigurationOptionCreateWithoutValuesInput.schema';
import { ConfigurationOptionUncheckedCreateWithoutValuesInputObjectSchema as ConfigurationOptionUncheckedCreateWithoutValuesInputObjectSchema } from './ConfigurationOptionUncheckedCreateWithoutValuesInput.schema';
import { ConfigurationOptionCreateOrConnectWithoutValuesInputObjectSchema as ConfigurationOptionCreateOrConnectWithoutValuesInputObjectSchema } from './ConfigurationOptionCreateOrConnectWithoutValuesInput.schema';
import { ConfigurationOptionUpsertWithoutValuesInputObjectSchema as ConfigurationOptionUpsertWithoutValuesInputObjectSchema } from './ConfigurationOptionUpsertWithoutValuesInput.schema';
import { ConfigurationOptionWhereUniqueInputObjectSchema as ConfigurationOptionWhereUniqueInputObjectSchema } from './ConfigurationOptionWhereUniqueInput.schema';
import { ConfigurationOptionUpdateToOneWithWhereWithoutValuesInputObjectSchema as ConfigurationOptionUpdateToOneWithWhereWithoutValuesInputObjectSchema } from './ConfigurationOptionUpdateToOneWithWhereWithoutValuesInput.schema';
import { ConfigurationOptionUpdateWithoutValuesInputObjectSchema as ConfigurationOptionUpdateWithoutValuesInputObjectSchema } from './ConfigurationOptionUpdateWithoutValuesInput.schema';
import { ConfigurationOptionUncheckedUpdateWithoutValuesInputObjectSchema as ConfigurationOptionUncheckedUpdateWithoutValuesInputObjectSchema } from './ConfigurationOptionUncheckedUpdateWithoutValuesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ConfigurationOptionCreateWithoutValuesInputObjectSchema), z.lazy(() => ConfigurationOptionUncheckedCreateWithoutValuesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ConfigurationOptionCreateOrConnectWithoutValuesInputObjectSchema).optional(),
  upsert: z.lazy(() => ConfigurationOptionUpsertWithoutValuesInputObjectSchema).optional(),
  connect: z.lazy(() => ConfigurationOptionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ConfigurationOptionUpdateToOneWithWhereWithoutValuesInputObjectSchema), z.lazy(() => ConfigurationOptionUpdateWithoutValuesInputObjectSchema), z.lazy(() => ConfigurationOptionUncheckedUpdateWithoutValuesInputObjectSchema)]).optional()
}).strict();
export const ConfigurationOptionUpdateOneRequiredWithoutValuesNestedInputObjectSchema: z.ZodType<Prisma.ConfigurationOptionUpdateOneRequiredWithoutValuesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationOptionUpdateOneRequiredWithoutValuesNestedInput>;
export const ConfigurationOptionUpdateOneRequiredWithoutValuesNestedInputObjectZodSchema = makeSchema();
