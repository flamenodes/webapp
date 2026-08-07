import * as z from 'zod';

export const RazorpayConfigSchema = z.object({
  id: z.string(),
  mode: z.string().default("test"),
  testKeyId: z.string().nullish(),
  testKeySecret: z.string().nullish(),
  prodKeyId: z.string().nullish(),
  prodKeySecret: z.string().nullish(),
  gstin: z.string().nullish(),
  companyName: z.string().default("Flame Nodes").nullish(),
  companyAddress: z.string().nullish(),
  companyCity: z.string().nullish(),
  companyZip: z.string().nullish(),
  companyCountry: z.string().default("India").nullish(),
  pteroNodeMode: z.string().default("balance").nullish(),
  pteroNodeId: z.number().int().nullish(),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
});

export type RazorpayConfigType = z.infer<typeof RazorpayConfigSchema>;
