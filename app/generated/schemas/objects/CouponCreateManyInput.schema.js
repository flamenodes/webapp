import * as z from 'zod';
import { CouponTypeSchema } from '../enums/CouponType.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    code: z.string(),
    type: CouponTypeSchema.optional(),
    amount: z.number().int(),
    description: z.string().optional().nullable(),
    active: z.boolean().optional(),
    expiresAt: z.coerce.date().optional().nullable(),
    maxUses: z.number().int().optional().nullable(),
    usedCount: z.number().int().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
}).strict();
export const CouponCreateManyInputObjectSchema = makeSchema();
export const CouponCreateManyInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CouponCreateManyInput.schema.js.map