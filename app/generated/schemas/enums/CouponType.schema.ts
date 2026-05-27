import * as z from 'zod';

export const CouponTypeSchema = z.enum(['FIXED', 'PERCENT'])

export type CouponType = z.infer<typeof CouponTypeSchema>;