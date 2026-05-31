import * as z from 'zod';
import { CouponSelectObjectSchema as CouponSelectObjectSchema } from './objects/CouponSelect.schema';
import { CouponWhereUniqueInputObjectSchema as CouponWhereUniqueInputObjectSchema } from './objects/CouponWhereUniqueInput.schema';
export const CouponDeleteOneSchema = z.object({ select: CouponSelectObjectSchema.optional(), where: CouponWhereUniqueInputObjectSchema }).strict();
export const CouponDeleteOneZodSchema = z.object({ select: CouponSelectObjectSchema.optional(), where: CouponWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=deleteOneCoupon.schema.js.map