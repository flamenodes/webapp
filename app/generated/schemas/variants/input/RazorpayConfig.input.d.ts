import * as z from 'zod';
export declare const RazorpayConfigInputSchema: z.ZodObject<{
    id: z.ZodString;
    mode: z.ZodString;
    testKeyId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    testKeySecret: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    prodKeyId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    prodKeySecret: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    gstin: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    companyName: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    companyAddress: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    companyCity: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    companyZip: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    companyCountry: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    updatedAt: z.ZodDate;
    createdAt: z.ZodDate;
}, z.core.$strict>;
export type RazorpayConfigInputType = z.infer<typeof RazorpayConfigInputSchema>;
//# sourceMappingURL=RazorpayConfig.input.d.ts.map