import * as z from 'zod';
// prettier-ignore
export const RazorpayConfigModelSchema = z.object({
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
    updatedAt: z.date(),
    createdAt: z.date()
}).strict();

export type RazorpayConfigPureType = z.infer<typeof RazorpayConfigModelSchema>;
