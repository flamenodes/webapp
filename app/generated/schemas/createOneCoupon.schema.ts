import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { CouponSelectObjectSchema as CouponSelectObjectSchema } from './objects/CouponSelect.schema';
import { CouponCreateInputObjectSchema as CouponCreateInputObjectSchema } from './objects/CouponCreateInput.schema';
import { CouponUncheckedCreateInputObjectSchema as CouponUncheckedCreateInputObjectSchema } from './objects/CouponUncheckedCreateInput.schema';

export const CouponCreateOneSchema: z.ZodType<Prisma.CouponCreateArgs> = z.object({ select: CouponSelectObjectSchema.optional(),  data: z.union([CouponCreateInputObjectSchema, CouponUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.CouponCreateArgs>;

export const CouponCreateOneZodSchema = z.object({ select: CouponSelectObjectSchema.optional(),  data: z.union([CouponCreateInputObjectSchema, CouponUncheckedCreateInputObjectSchema]) }).strict();