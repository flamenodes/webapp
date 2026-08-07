import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { BillingAddressSelectObjectSchema as BillingAddressSelectObjectSchema } from './objects/BillingAddressSelect.schema';
import { BillingAddressIncludeObjectSchema as BillingAddressIncludeObjectSchema } from './objects/BillingAddressInclude.schema';
import { BillingAddressWhereUniqueInputObjectSchema as BillingAddressWhereUniqueInputObjectSchema } from './objects/BillingAddressWhereUniqueInput.schema';

export const BillingAddressDeleteOneSchema: z.ZodType<Prisma.BillingAddressDeleteArgs> = z.object({ select: BillingAddressSelectObjectSchema.optional(), include: BillingAddressIncludeObjectSchema.optional(), where: BillingAddressWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BillingAddressDeleteArgs>;

export const BillingAddressDeleteOneZodSchema = z.object({ select: BillingAddressSelectObjectSchema.optional(), include: BillingAddressIncludeObjectSchema.optional(), where: BillingAddressWhereUniqueInputObjectSchema }).strict();