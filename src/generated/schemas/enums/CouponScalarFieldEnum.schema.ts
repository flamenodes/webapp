import * as z from 'zod';

export const CouponScalarFieldEnumSchema = z.enum(['id', 'code', 'type', 'amount', 'description', 'active', 'expiresAt', 'maxUses', 'usedCount', 'createdAt', 'updatedAt'])

export type CouponScalarFieldEnum = z.infer<typeof CouponScalarFieldEnumSchema>;