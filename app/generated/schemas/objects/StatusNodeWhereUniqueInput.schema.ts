import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const StatusNodeWhereUniqueInputObjectSchema: z.ZodType<Prisma.StatusNodeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.StatusNodeWhereUniqueInput>;
export const StatusNodeWhereUniqueInputObjectZodSchema = makeSchema();
