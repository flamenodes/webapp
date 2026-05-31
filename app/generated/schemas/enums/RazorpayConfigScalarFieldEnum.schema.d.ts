import * as z from 'zod';
export declare const RazorpayConfigScalarFieldEnumSchema: z.ZodEnum<{
    id: "id";
    createdAt: "createdAt";
    mode: "mode";
    updatedAt: "updatedAt";
    testKeyId: "testKeyId";
    testKeySecret: "testKeySecret";
    prodKeyId: "prodKeyId";
    prodKeySecret: "prodKeySecret";
    gstin: "gstin";
    companyName: "companyName";
    companyAddress: "companyAddress";
    companyCity: "companyCity";
    companyZip: "companyZip";
    companyCountry: "companyCountry";
}>;
export type RazorpayConfigScalarFieldEnum = z.infer<typeof RazorpayConfigScalarFieldEnumSchema>;
//# sourceMappingURL=RazorpayConfigScalarFieldEnum.schema.d.ts.map