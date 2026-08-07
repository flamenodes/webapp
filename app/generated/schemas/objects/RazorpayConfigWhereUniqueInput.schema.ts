import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const RazorpayConfigWhereUniqueInputObjectSchema: z.ZodType<Prisma.RazorpayConfigWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.RazorpayConfigWhereUniqueInput>;
export const RazorpayConfigWhereUniqueInputObjectZodSchema = makeSchema();
