import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const ConfigurationValueWhereUniqueInputObjectSchema: z.ZodType<Prisma.ConfigurationValueWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationValueWhereUniqueInput>;
export const ConfigurationValueWhereUniqueInputObjectZodSchema = makeSchema();
