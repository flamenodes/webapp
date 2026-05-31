import * as z from 'zod';
import { CouponSelectObjectSchema as CouponSelectObjectSchema } from './objects/CouponSelect.schema';
import { CouponCreateInputObjectSchema as CouponCreateInputObjectSchema } from './objects/CouponCreateInput.schema';
import { CouponUncheckedCreateInputObjectSchema as CouponUncheckedCreateInputObjectSchema } from './objects/CouponUncheckedCreateInput.schema';
export const CouponCreateOneSchema = z.object({ select: CouponSelectObjectSchema.optional(), data: z.union([CouponCreateInputObjectSchema, CouponUncheckedCreateInputObjectSchema]) }).strict();
export const CouponCreateOneZodSchema = z.object({ select: CouponSelectObjectSchema.optional(), data: z.union([CouponCreateInputObjectSchema, CouponUncheckedCreateInputObjectSchema]) }).strict();
//# sourceMappingURL=createOneCoupon.schema.js.map