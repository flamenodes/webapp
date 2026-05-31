import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { ConfigurationValueWhereUniqueInputObjectSchema as ConfigurationValueWhereUniqueInputObjectSchema } from './ConfigurationValueWhereUniqueInput.schema';
import { ConfigurationValueCreateWithoutOptionInputObjectSchema as ConfigurationValueCreateWithoutOptionInputObjectSchema } from './ConfigurationValueCreateWithoutOptionInput.schema';
import { ConfigurationValueUncheckedCreateWithoutOptionInputObjectSchema as ConfigurationValueUncheckedCreateWithoutOptionInputObjectSchema } from './ConfigurationValueUncheckedCreateWithoutOptionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConfigurationValueWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ConfigurationValueCreateWithoutOptionInputObjectSchema), z.lazy(() => ConfigurationValueUncheckedCreateWithoutOptionInputObjectSchema)])
}).strict();
export const ConfigurationValueCreateOrConnectWithoutOptionInputObjectSchema: z.ZodType<Prisma.ConfigurationValueCreateOrConnectWithoutOptionInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationValueCreateOrConnectWithoutOptionInput>;
export const ConfigurationValueCreateOrConnectWithoutOptionInputObjectZodSchema = makeSchema();
