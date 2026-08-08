import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { CouponOrderByWithRelationInputObjectSchema as CouponOrderByWithRelationInputObjectSchema } from './objects/CouponOrderByWithRelationInput.schema';
import { CouponWhereInputObjectSchema as CouponWhereInputObjectSchema } from './objects/CouponWhereInput.schema';
import { CouponWhereUniqueInputObjectSchema as CouponWhereUniqueInputObjectSchema } from './objects/CouponWhereUniqueInput.schema';
import { CouponScalarFieldEnumSchema } from './enums/CouponScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CouponFindFirstSelectSchema: z.ZodType<Prisma.CouponSelect> = z.object({
    id: z.boolean().optional(),
    code: z.boolean().optional(),
    type: z.boolean().optional(),
    amount: z.boolean().optional(),
    description: z.boolean().optional(),
    active: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    maxUses: z.boolean().optional(),
    usedCount: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CouponSelect>;

export const CouponFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    code: z.boolean().optional(),
    type: z.boolean().optional(),
    amount: z.boolean().optional(),
    description: z.boolean().optional(),
    active: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    maxUses: z.boolean().optional(),
    usedCount: z.boolean().optional()
  }).strict();

export const CouponFindFirstSchema: z.ZodType<Prisma.CouponFindFirstArgs> = z.object({ select: CouponFindFirstSelectSchema.optional(),  orderBy: z.union([CouponOrderByWithRelationInputObjectSchema, CouponOrderByWithRelationInputObjectSchema.array()]).optional(), where: CouponWhereInputObjectSchema.optional(), cursor: CouponWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CouponScalarFieldEnumSchema, CouponScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CouponFindFirstArgs>;

export const CouponFindFirstZodSchema = z.object({ select: CouponFindFirstSelectSchema.optional(),  orderBy: z.union([CouponOrderByWithRelationInputObjectSchema, CouponOrderByWithRelationInputObjectSchema.array()]).optional(), where: CouponWhereInputObjectSchema.optional(), cursor: CouponWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CouponScalarFieldEnumSchema, CouponScalarFieldEnumSchema.array()]).optional() }).strict();