import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { ConfigurationOptionTypeSchema } from '../enums/ConfigurationOptionType.schema'

const makeSchema = () => z.object({
  set: ConfigurationOptionTypeSchema.optional()
}).strict();
export const EnumConfigurationOptionTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumConfigurationOptionTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumConfigurationOptionTypeFieldUpdateOperationsInput>;
export const EnumConfigurationOptionTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
