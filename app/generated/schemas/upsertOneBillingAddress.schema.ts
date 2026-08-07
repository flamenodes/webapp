import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { BillingAddressSelectObjectSchema as BillingAddressSelectObjectSchema } from './objects/BillingAddressSelect.schema';
import { BillingAddressIncludeObjectSchema as BillingAddressIncludeObjectSchema } from './objects/BillingAddressInclude.schema';
import { BillingAddressWhereUniqueInputObjectSchema as BillingAddressWhereUniqueInputObjectSchema } from './objects/BillingAddressWhereUniqueInput.schema';
import { BillingAddressCreateInputObjectSchema as BillingAddressCreateInputObjectSchema } from './objects/BillingAddressCreateInput.schema';
import { BillingAddressUncheckedCreateInputObjectSchema as BillingAddressUncheckedCreateInputObjectSchema } from './objects/BillingAddressUncheckedCreateInput.schema';
import { BillingAddressUpdateInputObjectSchema as BillingAddressUpdateInputObjectSchema } from './objects/BillingAddressUpdateInput.schema';
import { BillingAddressUncheckedUpdateInputObjectSchema as BillingAddressUncheckedUpdateInputObjectSchema } from './objects/BillingAddressUncheckedUpdateInput.schema';

export const BillingAddressUpsertOneSchema: z.ZodType<Prisma.BillingAddressUpsertArgs> = z.object({ select: BillingAddressSelectObjectSchema.optional(), include: BillingAddressIncludeObjectSchema.optional(), where: BillingAddressWhereUniqueInputObjectSchema, create: z.union([ BillingAddressCreateInputObjectSchema, BillingAddressUncheckedCreateInputObjectSchema ]), update: z.union([ BillingAddressUpdateInputObjectSchema, BillingAddressUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.BillingAddressUpsertArgs>;

export const BillingAddressUpsertOneZodSchema = z.object({ select: BillingAddressSelectObjectSchema.optional(), include: BillingAddressIncludeObjectSchema.optional(), where: BillingAddressWhereUniqueInputObjectSchema, create: z.union([ BillingAddressCreateInputObjectSchema, BillingAddressUncheckedCreateInputObjectSchema ]), update: z.union([ BillingAddressUpdateInputObjectSchema, BillingAddressUncheckedUpdateInputObjectSchema ]) }).strict();