import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { BillingAddressSelectObjectSchema as BillingAddressSelectObjectSchema } from './objects/BillingAddressSelect.schema';
import { BillingAddressUpdateManyMutationInputObjectSchema as BillingAddressUpdateManyMutationInputObjectSchema } from './objects/BillingAddressUpdateManyMutationInput.schema';
import { BillingAddressWhereInputObjectSchema as BillingAddressWhereInputObjectSchema } from './objects/BillingAddressWhereInput.schema';

export const BillingAddressUpdateManyAndReturnSchema: z.ZodType<Prisma.BillingAddressUpdateManyAndReturnArgs> = z.object({ select: BillingAddressSelectObjectSchema.optional(), data: BillingAddressUpdateManyMutationInputObjectSchema, where: BillingAddressWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BillingAddressUpdateManyAndReturnArgs>;

export const BillingAddressUpdateManyAndReturnZodSchema = z.object({ select: BillingAddressSelectObjectSchema.optional(), data: BillingAddressUpdateManyMutationInputObjectSchema, where: BillingAddressWhereInputObjectSchema.optional() }).strict();