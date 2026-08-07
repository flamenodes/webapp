import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { BillingAddressUpdateManyMutationInputObjectSchema as BillingAddressUpdateManyMutationInputObjectSchema } from './objects/BillingAddressUpdateManyMutationInput.schema';
import { BillingAddressWhereInputObjectSchema as BillingAddressWhereInputObjectSchema } from './objects/BillingAddressWhereInput.schema';

export const BillingAddressUpdateManySchema: z.ZodType<Prisma.BillingAddressUpdateManyArgs> = z.object({ data: BillingAddressUpdateManyMutationInputObjectSchema, where: BillingAddressWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BillingAddressUpdateManyArgs>;

export const BillingAddressUpdateManyZodSchema = z.object({ data: BillingAddressUpdateManyMutationInputObjectSchema, where: BillingAddressWhereInputObjectSchema.optional() }).strict();