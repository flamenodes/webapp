import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { CouponSelectObjectSchema as CouponSelectObjectSchema } from './objects/CouponSelect.schema';
import { CouponWhereUniqueInputObjectSchema as CouponWhereUniqueInputObjectSchema } from './objects/CouponWhereUniqueInput.schema';

export const CouponFindUniqueSchema: z.ZodType<Prisma.CouponFindUniqueArgs> = z.object({ select: CouponSelectObjectSchema.optional(),  where: CouponWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CouponFindUniqueArgs>;

export const CouponFindUniqueZodSchema = z.object({ select: CouponSelectObjectSchema.optional(),  where: CouponWhereUniqueInputObjectSchema }).strict();