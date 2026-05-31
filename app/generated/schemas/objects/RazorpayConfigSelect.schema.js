import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.boolean().optional(),
    mode: z.boolean().optional(),
    testKeyId: z.boolean().optional(),
    testKeySecret: z.boolean().optional(),
    prodKeyId: z.boolean().optional(),
    prodKeySecret: z.boolean().optional(),
    gstin: z.boolean().optional(),
    companyName: z.boolean().optional(),
    companyAddress: z.boolean().optional(),
    companyCity: z.boolean().optional(),
    companyZip: z.boolean().optional(),
    companyCountry: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    createdAt: z.boolean().optional()
}).strict();
export const RazorpayConfigSelectObjectSchema = makeSchema();
export const RazorpayConfigSelectObjectZodSchema = makeSchema();
//# sourceMappingURL=RazorpayConfigSelect.schema.js.map