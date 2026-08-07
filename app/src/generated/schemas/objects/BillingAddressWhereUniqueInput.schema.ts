import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string().optional()
}).strict();
export const BillingAddressWhereUniqueInputObjectSchema: z.ZodType<Prisma.BillingAddressWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingAddressWhereUniqueInput>;
export const BillingAddressWhereUniqueInputObjectZodSchema = makeSchema();
