import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ConfigurationOptionUpdateWithoutValuesInputObjectSchema as ConfigurationOptionUpdateWithoutValuesInputObjectSchema } from './ConfigurationOptionUpdateWithoutValuesInput.schema';
import { ConfigurationOptionUncheckedUpdateWithoutValuesInputObjectSchema as ConfigurationOptionUncheckedUpdateWithoutValuesInputObjectSchema } from './ConfigurationOptionUncheckedUpdateWithoutValuesInput.schema';
import { ConfigurationOptionCreateWithoutValuesInputObjectSchema as ConfigurationOptionCreateWithoutValuesInputObjectSchema } from './ConfigurationOptionCreateWithoutValuesInput.schema';
import { ConfigurationOptionUncheckedCreateWithoutValuesInputObjectSchema as ConfigurationOptionUncheckedCreateWithoutValuesInputObjectSchema } from './ConfigurationOptionUncheckedCreateWithoutValuesInput.schema';
import { ConfigurationOptionWhereInputObjectSchema as ConfigurationOptionWhereInputObjectSchema } from './ConfigurationOptionWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ConfigurationOptionUpdateWithoutValuesInputObjectSchema), z.lazy(() => ConfigurationOptionUncheckedUpdateWithoutValuesInputObjectSchema)]),
  create: z.union([z.lazy(() => ConfigurationOptionCreateWithoutValuesInputObjectSchema), z.lazy(() => ConfigurationOptionUncheckedCreateWithoutValuesInputObjectSchema)]),
  where: z.lazy(() => ConfigurationOptionWhereInputObjectSchema).optional()
}).strict();
export const ConfigurationOptionUpsertWithoutValuesInputObjectSchema: z.ZodType<Prisma.ConfigurationOptionUpsertWithoutValuesInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationOptionUpsertWithoutValuesInput>;
export const ConfigurationOptionUpsertWithoutValuesInputObjectZodSchema = makeSchema();
