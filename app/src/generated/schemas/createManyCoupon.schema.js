import * as z from 'zod';
import { CouponCreateManyInputObjectSchema as CouponCreateManyInputObjectSchema } from './objects/CouponCreateManyInput.schema';
export const CouponCreateManySchema = z.object({ data: z.union([CouponCreateManyInputObjectSchema, z.array(CouponCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const CouponCreateManyZodSchema = z.object({ data: z.union([CouponCreateManyInputObjectSchema, z.array(CouponCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyCoupon.schema.js.map