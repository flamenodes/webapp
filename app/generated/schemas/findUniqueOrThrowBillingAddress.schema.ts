import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { BillingAddressSelectObjectSchema as BillingAddressSelectObjectSchema } from './objects/BillingAddressSelect.schema';
import { BillingAddressIncludeObjectSchema as BillingAddressIncludeObjectSchema } from './objects/BillingAddressInclude.schema';
import { BillingAddressWhereUniqueInputObjectSchema as BillingAddressWhereUniqueInputObjectSchema } from './objects/BillingAddressWhereUniqueInput.schema';

export const BillingAddressFindUniqueOrThrowSchema: z.ZodType<Prisma.BillingAddressFindUniqueOrThrowArgs> = z.object({ select: BillingAddressSelectObjectSchema.optional(), include: BillingAddressIncludeObjectSchema.optional(), where: BillingAddressWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BillingAddressFindUniqueOrThrowArgs>;

export const BillingAddressFindUniqueOrThrowZodSchema = z.object({ select: BillingAddressSelectObjectSchema.optional(), include: BillingAddressIncludeObjectSchema.optional(), where: BillingAddressWhereUniqueInputObjectSchema }).strict();