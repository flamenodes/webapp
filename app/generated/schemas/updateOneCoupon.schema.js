import * as z from 'zod';
import { CouponSelectObjectSchema as CouponSelectObjectSchema } from './objects/CouponSelect.schema';
import { CouponUpdateInputObjectSchema as CouponUpdateInputObjectSchema } from './objects/CouponUpdateInput.schema';
import { CouponUncheckedUpdateInputObjectSchema as CouponUncheckedUpdateInputObjectSchema } from './objects/CouponUncheckedUpdateInput.schema';
import { CouponWhereUniqueInputObjectSchema as CouponWhereUniqueInputObjectSchema } from './objects/CouponWhereUniqueInput.schema';
export const CouponUpdateOneSchema = z.object({ select: CouponSelectObjectSchema.optional(), data: z.union([CouponUpdateInputObjectSchema, CouponUncheckedUpdateInputObjectSchema]), where: CouponWhereUniqueInputObjectSchema }).strict();
export const CouponUpdateOneZodSchema = z.object({ select: CouponSelectObjectSchema.optional(), data: z.union([CouponUpdateInputObjectSchema, CouponUncheckedUpdateInputObjectSchema]), where: CouponWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=updateOneCoupon.schema.js.map