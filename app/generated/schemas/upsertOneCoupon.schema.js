import * as z from 'zod';
import { CouponSelectObjectSchema as CouponSelectObjectSchema } from './objects/CouponSelect.schema';
import { CouponWhereUniqueInputObjectSchema as CouponWhereUniqueInputObjectSchema } from './objects/CouponWhereUniqueInput.schema';
import { CouponCreateInputObjectSchema as CouponCreateInputObjectSchema } from './objects/CouponCreateInput.schema';
import { CouponUncheckedCreateInputObjectSchema as CouponUncheckedCreateInputObjectSchema } from './objects/CouponUncheckedCreateInput.schema';
import { CouponUpdateInputObjectSchema as CouponUpdateInputObjectSchema } from './objects/CouponUpdateInput.schema';
import { CouponUncheckedUpdateInputObjectSchema as CouponUncheckedUpdateInputObjectSchema } from './objects/CouponUncheckedUpdateInput.schema';
export const CouponUpsertOneSchema = z.object({ select: CouponSelectObjectSchema.optional(), where: CouponWhereUniqueInputObjectSchema, create: z.union([CouponCreateInputObjectSchema, CouponUncheckedCreateInputObjectSchema]), update: z.union([CouponUpdateInputObjectSchema, CouponUncheckedUpdateInputObjectSchema]) }).strict();
export const CouponUpsertOneZodSchema = z.object({ select: CouponSelectObjectSchema.optional(), where: CouponWhereUniqueInputObjectSchema, create: z.union([CouponCreateInputObjectSchema, CouponUncheckedCreateInputObjectSchema]), update: z.union([CouponUpdateInputObjectSchema, CouponUncheckedUpdateInputObjectSchema]) }).strict();
//# sourceMappingURL=upsertOneCoupon.schema.js.map