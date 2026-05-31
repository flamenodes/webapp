import * as z from 'zod';
export declare const RazorpayConfigDeleteResultSchema: z.ZodNullable<z.ZodObject<{
    id: z.ZodString;
    mode: z.ZodString;
    testKeyId: z.ZodOptional<z.ZodString>;
    testKeySecret: z.ZodOptional<z.ZodString>;
    prodKeyId: z.ZodOptional<z.ZodString>;
    prodKeySecret: z.ZodOptional<z.ZodString>;
    gstin: z.ZodOptional<z.ZodString>;
    companyName: z.ZodOptional<z.ZodString>;
    companyAddress: z.ZodOptional<z.ZodString>;
    companyCity: z.ZodOptional<z.ZodString>;
    companyZip: z.ZodOptional<z.ZodString>;
    companyCountry: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodDate;
    createdAt: z.ZodDate;
}, z.core.$strip>>;
//# sourceMappingURL=RazorpayConfigDeleteResult.schema.d.ts.map