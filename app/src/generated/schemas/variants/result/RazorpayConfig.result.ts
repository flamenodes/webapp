import * as z from 'zod';
// prettier-ignore
export const RazorpayConfigResultSchema = z.object({
    id: z.string(),
    mode: z.string(),
    testKeyId: z.string().nullable(),
    testKeySecret: z.string().nullable(),
    prodKeyId: z.string().nullable(),
    prodKeySecret: z.string().nullable(),
    gstin: z.string().nullable(),
    companyName: z.string().nullable(),
    companyAddress: z.string().nullable(),
    companyCity: z.string().nullable(),
    companyZip: z.string().nullable(),
    companyCountry: z.string().nullable(),
    pteroNodeMode: z.string().nullable(),
    pteroNodeId: z.number().int().nullable(),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}).strict();

export type RazorpayConfigResultType = z.infer<typeof RazorpayConfigResultSchema>;
