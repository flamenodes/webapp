import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


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
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  pteroNodeId: z.number().int().optional().nullable(),
  pteroNodeMode: z.string().optional().nullable()
}).strict();
export const RazorpayConfigUncheckedCreateInputObjectSchema: z.ZodType<Prisma.RazorpayConfigUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RazorpayConfigUncheckedCreateInput>;
export const RazorpayConfigUncheckedCreateInputObjectZodSchema = makeSchema();
