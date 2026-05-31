import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { ConfigurationValueWhereUniqueInputObjectSchema as ConfigurationValueWhereUniqueInputObjectSchema } from './ConfigurationValueWhereUniqueInput.schema';
import { ConfigurationValueUpdateWithoutOptionInputObjectSchema as ConfigurationValueUpdateWithoutOptionInputObjectSchema } from './ConfigurationValueUpdateWithoutOptionInput.schema';
import { ConfigurationValueUncheckedUpdateWithoutOptionInputObjectSchema as ConfigurationValueUncheckedUpdateWithoutOptionInputObjectSchema } from './ConfigurationValueUncheckedUpdateWithoutOptionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConfigurationValueWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ConfigurationValueUpdateWithoutOptionInputObjectSchema), z.lazy(() => ConfigurationValueUncheckedUpdateWithoutOptionInputObjectSchema)])
}).strict();
export const ConfigurationValueUpdateWithWhereUniqueWithoutOptionInputObjectSchema: z.ZodType<Prisma.ConfigurationValueUpdateWithWhereUniqueWithoutOptionInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationValueUpdateWithWhereUniqueWithoutOptionInput>;
export const ConfigurationValueUpdateWithWhereUniqueWithoutOptionInputObjectZodSchema = makeSchema();
