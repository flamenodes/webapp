import * as z from 'zod';
export const RazorpayConfigFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  mode: z.string(),
  testKeyId: z.string().optional(),
  testKeySecret: z.string().optional(),
  prodKeyId: z.string().optional(),
  prodKeySecret: z.string().optional(),
  gstin: z.string().optional(),
  companyName: z.string().optional(),
  companyAddress: z.string().optional(),
  companyCity: z.string().optional(),
  companyZip: z.string().optional(),
  companyCountry: z.string().optional(),
  updatedAt: z.date(),
  createdAt: z.date()
}));