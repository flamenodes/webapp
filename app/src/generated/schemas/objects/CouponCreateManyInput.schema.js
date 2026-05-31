import * as z from 'zod';
import { CouponTypeSchema } from '../enums/CouponType.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    code: z.string(),
    type: CouponTypeSchema.optional(),
    amount: z.number().int(),
    description: z.string().optional().nullable(),
    active: z.boolean().optional(),
    expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional().nullable(),
    maxUses: z.number().int().optional().nullable(),
    usedCount: z.number().int().optional(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional()
}).strict();
export const CouponCreateManyInputObjectSchema = makeSchema();
export const CouponCreateManyInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CouponCreateManyInput.schema.js.map