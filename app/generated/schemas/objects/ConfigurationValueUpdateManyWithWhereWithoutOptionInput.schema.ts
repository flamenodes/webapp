import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { ConfigurationValueScalarWhereInputObjectSchema as ConfigurationValueScalarWhereInputObjectSchema } from './ConfigurationValueScalarWhereInput.schema';
import { ConfigurationValueUpdateManyMutationInputObjectSchema as ConfigurationValueUpdateManyMutationInputObjectSchema } from './ConfigurationValueUpdateManyMutationInput.schema';
import { ConfigurationValueUncheckedUpdateManyWithoutOptionInputObjectSchema as ConfigurationValueUncheckedUpdateManyWithoutOptionInputObjectSchema } from './ConfigurationValueUncheckedUpdateManyWithoutOptionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConfigurationValueScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ConfigurationValueUpdateManyMutationInputObjectSchema), z.lazy(() => ConfigurationValueUncheckedUpdateManyWithoutOptionInputObjectSchema)])
}).strict();
export const ConfigurationValueUpdateManyWithWhereWithoutOptionInputObjectSchema: z.ZodType<Prisma.ConfigurationValueUpdateManyWithWhereWithoutOptionInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationValueUpdateManyWithWhereWithoutOptionInput>;
export const ConfigurationValueUpdateManyWithWhereWithoutOptionInputObjectZodSchema = makeSchema();
