import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    orderId: z.string().optional(),
    invoiceNumber: z.string().optional()
}).strict();
export const InvoiceWhereUniqueInputObjectSchema = makeSchema();
export const InvoiceWhereUniqueInputObjectZodSchema = makeSchema();
//# sourceMappingURL=InvoiceWhereUniqueInput.schema.js.map