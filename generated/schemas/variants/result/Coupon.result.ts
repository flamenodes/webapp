import * as z from 'zod';
import { CouponTypeSchema } from '../../enums/CouponType.schema';
// prettier-ignore
export const CouponResultSchema = z.object({
    id: z.string(),
    code: z.string(),
    type: CouponTypeSchema,
    amount: z.number().int(),
    description: z.string().nullable(),
    active: z.boolean(),
    expiresAt: z.date().nullable(),
    maxUses: z.number().int().nullable(),
    usedCount: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type CouponResultType = z.infer<typeof CouponResultSchema>;
