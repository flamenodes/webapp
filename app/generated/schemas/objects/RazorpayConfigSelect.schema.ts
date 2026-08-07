import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  mode: z.boolean().optional(),
  testKeyId: z.boolean().optional(),
  testKeySecret: z.boolean().optional(),
  prodKeyId: z.boolean().optional(),
  prodKeySecret: z.boolean().optional(),
  gstin: z.boolean().optional(),
  companyName: z.boolean().optional(),
  companyAddress: z.boolean().optional(),
  companyCity: z.boolean().optional(),
  companyZip: z.boolean().optional(),
  companyCountry: z.boolean().optional(),
  pteroNodeMode: z.boolean().optional(),
  pteroNodeId: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
export const RazorpayConfigSelectObjectSchema: z.ZodType<Prisma.RazorpayConfigSelect> = makeSchema() as unknown as z.ZodType<Prisma.RazorpayConfigSelect>;
export const RazorpayConfigSelectObjectZodSchema = makeSchema();
