import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  mode: z.string().optional(),
  testKeyId: z.string().optional().nullable(),
  testKeySecret: z.string().optional().nullable(),
  prodKeyId: z.string().optional().nullable(),
  prodKeySecret: z.string().optional().nullable(),
  gstin: z.string().optional().nullable(),
  companyName: z.string().optional().nullable(),
  companyAddress: z.string().optional().nullable(),
  companyCity: z.string().optional().nullable(),
  companyZip: z.string().optional().nullable(),
  companyCountry: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const RazorpayConfigCreateManyInputObjectSchema: z.ZodType<Prisma.RazorpayConfigCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.RazorpayConfigCreateManyInput>;
export const RazorpayConfigCreateManyInputObjectZodSchema = makeSchema();
