import * as z from 'zod';

export const CouponScalarFieldEnumSchema = z.enum(['id', 'code', 'type', 'amount', 'description', 'active', 'createdAt', 'updatedAt', 'expiresAt', 'maxUses', 'usedCount'])

export type CouponScalarFieldEnum = z.infer<typeof CouponScalarFieldEnumSchema>;