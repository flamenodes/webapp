import * as z from 'zod';
export declare const RazorpayConfigResultSchema: z.ZodObject<{
    id: z.ZodString;
    mode: z.ZodString;
    testKeyId: z.ZodNullable<z.ZodString>;
    testKeySecret: z.ZodNullable<z.ZodString>;
    prodKeyId: z.ZodNullable<z.ZodString>;
    prodKeySecret: z.ZodNullable<z.ZodString>;
    gstin: z.ZodNullable<z.ZodString>;
    companyName: z.ZodNullable<z.ZodString>;
    companyAddress: z.ZodNullable<z.ZodString>;
    companyCity: z.ZodNullable<z.ZodString>;
    companyZip: z.ZodNullable<z.ZodString>;
    companyCountry: z.ZodNullable<z.ZodString>;
    updatedAt: z.ZodDate;
    createdAt: z.ZodDate;
}, z.core.$strict>;
export type RazorpayConfigResultType = z.infer<typeof RazorpayConfigResultSchema>;
//# sourceMappingURL=RazorpayConfig.result.d.ts.map