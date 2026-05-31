import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { ConfigurationValueWhereInputObjectSchema as ConfigurationValueWhereInputObjectSchema } from './ConfigurationValueWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConfigurationValueWhereInputObjectSchema).optional()
}).strict();
export const ConfigurationOptionCountOutputTypeCountValuesArgsObjectSchema = makeSchema();
export const ConfigurationOptionCountOutputTypeCountValuesArgsObjectZodSchema = makeSchema();
