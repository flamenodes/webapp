import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { BillingAddressSelectObjectSchema as BillingAddressSelectObjectSchema } from './objects/BillingAddressSelect.schema';
import { BillingAddressIncludeObjectSchema as BillingAddressIncludeObjectSchema } from './objects/BillingAddressInclude.schema';
import { BillingAddressWhereUniqueInputObjectSchema as BillingAddressWhereUniqueInputObjectSchema } from './objects/BillingAddressWhereUniqueInput.schema';

export const BillingAddressFindUniqueSchema: z.ZodType<Prisma.BillingAddressFindUniqueArgs> = z.object({ select: BillingAddressSelectObjectSchema.optional(), include: BillingAddressIncludeObjectSchema.optional(), where: BillingAddressWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BillingAddressFindUniqueArgs>;

export const BillingAddressFindUniqueZodSchema = z.object({ select: BillingAddressSelectObjectSchema.optional(), include: BillingAddressIncludeObjectSchema.optional(), where: BillingAddressWhereUniqueInputObjectSchema }).strict();