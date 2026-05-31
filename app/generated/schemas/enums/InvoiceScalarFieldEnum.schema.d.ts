import * as z from 'zod';
export declare const InvoiceScalarFieldEnumSchema: z.ZodEnum<{
    id: "id";
    orderId: "orderId";
    invoiceNumber: "invoiceNumber";
    pdfUrl: "pdfUrl";
    razorpayData: "razorpayData";
    createdAt: "createdAt";
}>;
export type InvoiceScalarFieldEnum = z.infer<typeof InvoiceScalarFieldEnumSchema>;
//# sourceMappingURL=InvoiceScalarFieldEnum.schema.d.ts.map