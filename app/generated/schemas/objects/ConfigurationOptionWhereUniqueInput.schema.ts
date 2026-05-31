import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const ConfigurationOptionWhereUniqueInputObjectSchema: z.ZodType<Prisma.ConfigurationOptionWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationOptionWhereUniqueInput>;
export const ConfigurationOptionWhereUniqueInputObjectZodSchema = makeSchema();
