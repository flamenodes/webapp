import * as z from 'zod';
import { CouponWhereInputObjectSchema as CouponWhereInputObjectSchema } from './objects/CouponWhereInput.schema';
export const CouponDeleteManySchema = z.object({ where: CouponWhereInputObjectSchema.optional() }).strict();
export const CouponDeleteManyZodSchema = z.object({ where: CouponWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=deleteManyCoupon.schema.js.map