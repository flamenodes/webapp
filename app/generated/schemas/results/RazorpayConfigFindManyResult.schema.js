import * as z from 'zod';
export const RazorpayConfigFindManyResultSchema = z.object({
    data: z.array(z.object({
        id: z.string(),
        mode: z.string(),
        testKeyId: z.string().optional(),
        testKeySecret: z.string().optional(),
        prodKeyId: z.string().optional(),
        prodKeySecret: z.string().optional(),
        gstin: z.string().optional(),
        companyName: z.string().optional(),
        companyAddress: z.string().optional(),
        companyCity: z.string().optional(),
        companyZip: z.string().optional(),
        companyCountry: z.string().optional(),
        updatedAt: z.date(),
        createdAt: z.date()
    })),
    pagination: z.object({
        page: z.number().int().min(1),
        pageSize: z.number().int().min(1),
        total: z.number().int().min(0),
        totalPages: z.number().int().min(0),
        hasNext: z.boolean(),
        hasPrev: z.boolean()
    })
});
//# sourceMappingURL=RazorpayConfigFindManyResult.schema.js.map