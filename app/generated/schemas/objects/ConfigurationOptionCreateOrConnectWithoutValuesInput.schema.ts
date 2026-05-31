import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { ConfigurationOptionWhereUniqueInputObjectSchema as ConfigurationOptionWhereUniqueInputObjectSchema } from './ConfigurationOptionWhereUniqueInput.schema';
import { ConfigurationOptionCreateWithoutValuesInputObjectSchema as ConfigurationOptionCreateWithoutValuesInputObjectSchema } from './ConfigurationOptionCreateWithoutValuesInput.schema';
import { ConfigurationOptionUncheckedCreateWithoutValuesInputObjectSchema as ConfigurationOptionUncheckedCreateWithoutValuesInputObjectSchema } from './ConfigurationOptionUncheckedCreateWithoutValuesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConfigurationOptionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ConfigurationOptionCreateWithoutValuesInputObjectSchema), z.lazy(() => ConfigurationOptionUncheckedCreateWithoutValuesInputObjectSchema)])
}).strict();
export const ConfigurationOptionCreateOrConnectWithoutValuesInputObjectSchema: z.ZodType<Prisma.ConfigurationOptionCreateOrConnectWithoutValuesInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationOptionCreateOrConnectWithoutValuesInput>;
export const ConfigurationOptionCreateOrConnectWithoutValuesInputObjectZodSchema = makeSchema();
