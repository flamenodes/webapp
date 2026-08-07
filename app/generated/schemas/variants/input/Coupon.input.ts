import * as z from 'zod';
import { CouponTypeSchema } from '../../enums/CouponType.schema';
// prettier-ignore
export const CouponInputSchema = z.object({
    id: z.string(),
    code: z.string(),
    type: CouponTypeSchema,
    amount: z.number().int(),
    description: z.string().optional().nullable(),
    active: z.boolean(),
    expiresAt: z.coerce.date().optional().nullable(),
    maxUses: z.number().int().optional().nullable(),
    usedCount: z.number().int(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
}).strict();

export type CouponInputType = z.infer<typeof CouponInputSchema>;
