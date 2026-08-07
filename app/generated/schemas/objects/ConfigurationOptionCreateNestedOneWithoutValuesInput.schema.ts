import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { ConfigurationOptionCreateWithoutValuesInputObjectSchema as ConfigurationOptionCreateWithoutValuesInputObjectSchema } from './ConfigurationOptionCreateWithoutValuesInput.schema';
import { ConfigurationOptionUncheckedCreateWithoutValuesInputObjectSchema as ConfigurationOptionUncheckedCreateWithoutValuesInputObjectSchema } from './ConfigurationOptionUncheckedCreateWithoutValuesInput.schema';
import { ConfigurationOptionCreateOrConnectWithoutValuesInputObjectSchema as ConfigurationOptionCreateOrConnectWithoutValuesInputObjectSchema } from './ConfigurationOptionCreateOrConnectWithoutValuesInput.schema';
import { ConfigurationOptionWhereUniqueInputObjectSchema as ConfigurationOptionWhereUniqueInputObjectSchema } from './ConfigurationOptionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ConfigurationOptionCreateWithoutValuesInputObjectSchema), z.lazy(() => ConfigurationOptionUncheckedCreateWithoutValuesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ConfigurationOptionCreateOrConnectWithoutValuesInputObjectSchema).optional(),
  connect: z.lazy(() => ConfigurationOptionWhereUniqueInputObjectSchema).optional()
}).strict();
export const ConfigurationOptionCreateNestedOneWithoutValuesInputObjectSchema: z.ZodType<Prisma.ConfigurationOptionCreateNestedOneWithoutValuesInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationOptionCreateNestedOneWithoutValuesInput>;
export const ConfigurationOptionCreateNestedOneWithoutValuesInputObjectZodSchema = makeSchema();
