import * as z from 'zod';
// prettier-ignore
export const RazorpayConfigInputSchema = z.object({
    id: z.string(),
    mode: z.string(),
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
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    pteroNodeId: z.number().int().optional().nullable(),
    pteroNodeMode: z.string().optional().nullable()
}).strict();

export type RazorpayConfigInputType = z.infer<typeof RazorpayConfigInputSchema>;
