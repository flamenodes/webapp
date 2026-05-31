import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.boolean().optional(),
    code: z.boolean().optional(),
    type: z.boolean().optional(),
    amount: z.boolean().optional(),
    description: z.boolean().optional(),
    active: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    maxUses: z.boolean().optional(),
    usedCount: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
}).strict();
export const CouponSelectObjectSchema = makeSchema();
export const CouponSelectObjectZodSchema = makeSchema();
//# sourceMappingURL=CouponSelect.schema.js.map