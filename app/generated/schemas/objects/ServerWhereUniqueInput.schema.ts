import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional(),
  orderItemId: z.string().optional()
}).strict();
export const ServerWhereUniqueInputObjectSchema: z.ZodType<Prisma.ServerWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerWhereUniqueInput>;
export const ServerWhereUniqueInputObjectZodSchema = makeSchema();
