import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    mode: z.literal(true).optional(),
    testKeyId: z.literal(true).optional(),
    testKeySecret: z.literal(true).optional(),
    prodKeyId: z.literal(true).optional(),
    prodKeySecret: z.literal(true).optional(),
    gstin: z.literal(true).optional(),
    companyName: z.literal(true).optional(),
    companyAddress: z.literal(true).optional(),
    companyCity: z.literal(true).optional(),
    companyZip: z.literal(true).optional(),
    companyCountry: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    _all: z.literal(true).optional()
}).strict();
export const RazorpayConfigCountAggregateInputObjectSchema = makeSchema();
export const RazorpayConfigCountAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=RazorpayConfigCountAggregateInput.schema.js.map