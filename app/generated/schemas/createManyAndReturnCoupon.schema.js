import * as z from 'zod';
import { CouponSelectObjectSchema as CouponSelectObjectSchema } from './objects/CouponSelect.schema';
import { CouponCreateManyInputObjectSchema as CouponCreateManyInputObjectSchema } from './objects/CouponCreateManyInput.schema';
export const CouponCreateManyAndReturnSchema = z.object({ select: CouponSelectObjectSchema.optional(), data: z.union([CouponCreateManyInputObjectSchema, z.array(CouponCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const CouponCreateManyAndReturnZodSchema = z.object({ select: CouponSelectObjectSchema.optional(), data: z.union([CouponCreateManyInputObjectSchema, z.array(CouponCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyAndReturnCoupon.schema.js.map