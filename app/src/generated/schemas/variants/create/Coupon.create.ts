import * as z from 'zod';
import { CouponTypeSchema } from '../../enums/CouponType.schema';
// prettier-ignore
export const CouponCreateSchema = z.object({
    id: z.string(),
    code: z.string(),
    type: CouponTypeSchema,
    amount: z.number().int(),
    description: z.string().nullable(),
    active: z.boolean(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    maxUses: z.number().int().nullable(),
    usedCount: z.number().int()
}).strict();

export type CouponCreateType = z.infer<typeof CouponCreateSchema>;
