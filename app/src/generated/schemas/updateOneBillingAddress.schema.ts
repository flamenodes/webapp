import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { BillingAddressSelectObjectSchema as BillingAddressSelectObjectSchema } from './objects/BillingAddressSelect.schema';
import { BillingAddressIncludeObjectSchema as BillingAddressIncludeObjectSchema } from './objects/BillingAddressInclude.schema';
import { BillingAddressUpdateInputObjectSchema as BillingAddressUpdateInputObjectSchema } from './objects/BillingAddressUpdateInput.schema';
import { BillingAddressUncheckedUpdateInputObjectSchema as BillingAddressUncheckedUpdateInputObjectSchema } from './objects/BillingAddressUncheckedUpdateInput.schema';
import { BillingAddressWhereUniqueInputObjectSchema as BillingAddressWhereUniqueInputObjectSchema } from './objects/BillingAddressWhereUniqueInput.schema';

export const BillingAddressUpdateOneSchema: z.ZodType<Prisma.BillingAddressUpdateArgs> = z.object({ select: BillingAddressSelectObjectSchema.optional(), include: BillingAddressIncludeObjectSchema.optional(), data: z.union([BillingAddressUpdateInputObjectSchema, BillingAddressUncheckedUpdateInputObjectSchema]), where: BillingAddressWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BillingAddressUpdateArgs>;

export const BillingAddressUpdateOneZodSchema = z.object({ select: BillingAddressSelectObjectSchema.optional(), include: BillingAddressIncludeObjectSchema.optional(), data: z.union([BillingAddressUpdateInputObjectSchema, BillingAddressUncheckedUpdateInputObjectSchema]), where: BillingAddressWhereUniqueInputObjectSchema }).strict();