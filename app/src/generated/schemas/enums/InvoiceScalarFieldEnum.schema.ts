import * as z from 'zod';

export const InvoiceScalarFieldEnumSchema = z.enum(['id', 'orderId', 'invoiceNumber', 'pdfUrl', 'razorpayData', 'createdAt'])

export type InvoiceScalarFieldEnum = z.infer<typeof InvoiceScalarFieldEnumSchema>;