import * as z from 'zod';
import { CouponSelectObjectSchema as CouponSelectObjectSchema } from './objects/CouponSelect.schema';
import { CouponWhereUniqueInputObjectSchema as CouponWhereUniqueInputObjectSchema } from './objects/CouponWhereUniqueInput.schema';
export const CouponFindUniqueSchema = z.object({ select: CouponSelectObjectSchema.optional(), where: CouponWhereUniqueInputObjectSchema }).strict();
export const CouponFindUniqueZodSchema = z.object({ select: CouponSelectObjectSchema.optional(), where: CouponWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=findUniqueCoupon.schema.js.map