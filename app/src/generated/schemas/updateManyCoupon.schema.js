import * as z from 'zod';
import { CouponUpdateManyMutationInputObjectSchema as CouponUpdateManyMutationInputObjectSchema } from './objects/CouponUpdateManyMutationInput.schema';
import { CouponWhereInputObjectSchema as CouponWhereInputObjectSchema } from './objects/CouponWhereInput.schema';
export const CouponUpdateManySchema = z.object({ data: CouponUpdateManyMutationInputObjectSchema, where: CouponWhereInputObjectSchema.optional() }).strict();
export const CouponUpdateManyZodSchema = z.object({ data: CouponUpdateManyMutationInputObjectSchema, where: CouponWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyCoupon.schema.js.map