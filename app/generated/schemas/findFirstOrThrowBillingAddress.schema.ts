import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { BillingAddressIncludeObjectSchema as BillingAddressIncludeObjectSchema } from './objects/BillingAddressInclude.schema';
import { BillingAddressOrderByWithRelationInputObjectSchema as BillingAddressOrderByWithRelationInputObjectSchema } from './objects/BillingAddressOrderByWithRelationInput.schema';
import { BillingAddressWhereInputObjectSchema as BillingAddressWhereInputObjectSchema } from './objects/BillingAddressWhereInput.schema';
import { BillingAddressWhereUniqueInputObjectSchema as BillingAddressWhereUniqueInputObjectSchema } from './objects/BillingAddressWhereUniqueInput.schema';
import { BillingAddressScalarFieldEnumSchema } from './enums/BillingAddressScalarFieldEnum.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './objects/UserArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BillingAddressFindFirstOrThrowSelectSchema: z.ZodType<Prisma.BillingAddressSelect> = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    phone: z.boolean().optional(),
    address: z.boolean().optional(),
    city: z.boolean().optional(),
    state: z.boolean().optional(),
    zip: z.boolean().optional(),
    country: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.BillingAddressSelect>;

export const BillingAddressFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    phone: z.boolean().optional(),
    address: z.boolean().optional(),
    city: z.boolean().optional(),
    state: z.boolean().optional(),
    zip: z.boolean().optional(),
    country: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const BillingAddressFindFirstOrThrowSchema: z.ZodType<Prisma.BillingAddressFindFirstOrThrowArgs> = z.object({ select: BillingAddressFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => BillingAddressIncludeObjectSchema.optional()), orderBy: z.union([BillingAddressOrderByWithRelationInputObjectSchema, BillingAddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: BillingAddressWhereInputObjectSchema.optional(), cursor: BillingAddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BillingAddressScalarFieldEnumSchema, BillingAddressScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.BillingAddressFindFirstOrThrowArgs>;

export const BillingAddressFindFirstOrThrowZodSchema = z.object({ select: BillingAddressFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => BillingAddressIncludeObjectSchema.optional()), orderBy: z.union([BillingAddressOrderByWithRelationInputObjectSchema, BillingAddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: BillingAddressWhereInputObjectSchema.optional(), cursor: BillingAddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BillingAddressScalarFieldEnumSchema, BillingAddressScalarFieldEnumSchema.array()]).optional() }).strict();