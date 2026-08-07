import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { BillingAddressSelectObjectSchema as BillingAddressSelectObjectSchema } from './objects/BillingAddressSelect.schema';
import { BillingAddressIncludeObjectSchema as BillingAddressIncludeObjectSchema } from './objects/BillingAddressInclude.schema';
import { BillingAddressCreateInputObjectSchema as BillingAddressCreateInputObjectSchema } from './objects/BillingAddressCreateInput.schema';
import { BillingAddressUncheckedCreateInputObjectSchema as BillingAddressUncheckedCreateInputObjectSchema } from './objects/BillingAddressUncheckedCreateInput.schema';

export const BillingAddressCreateOneSchema: z.ZodType<Prisma.BillingAddressCreateArgs> = z.object({ select: BillingAddressSelectObjectSchema.optional(), include: BillingAddressIncludeObjectSchema.optional(), data: z.union([BillingAddressCreateInputObjectSchema, BillingAddressUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.BillingAddressCreateArgs>;

export const BillingAddressCreateOneZodSchema = z.object({ select: BillingAddressSelectObjectSchema.optional(), include: BillingAddressIncludeObjectSchema.optional(), data: z.union([BillingAddressCreateInputObjectSchema, BillingAddressUncheckedCreateInputObjectSchema]) }).strict();