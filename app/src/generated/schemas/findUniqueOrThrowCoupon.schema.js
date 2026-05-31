import * as z from 'zod';
import { CouponSelectObjectSchema as CouponSelectObjectSchema } from './objects/CouponSelect.schema';
import { CouponWhereUniqueInputObjectSchema as CouponWhereUniqueInputObjectSchema } from './objects/CouponWhereUniqueInput.schema';
export const CouponFindUniqueOrThrowSchema = z.object({ select: CouponSelectObjectSchema.optional(), where: CouponWhereUniqueInputObjectSchema }).strict();
export const CouponFindUniqueOrThrowZodSchema = z.object({ select: CouponSelectObjectSchema.optional(), where: CouponWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=findUniqueOrThrowCoupon.schema.js.map