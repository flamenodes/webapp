import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { BillingAddressWhereInputObjectSchema as BillingAddressWhereInputObjectSchema } from './objects/BillingAddressWhereInput.schema';

export const BillingAddressDeleteManySchema: z.ZodType<Prisma.BillingAddressDeleteManyArgs> = z.object({ where: BillingAddressWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BillingAddressDeleteManyArgs>;

export const BillingAddressDeleteManyZodSchema = z.object({ where: BillingAddressWhereInputObjectSchema.optional() }).strict();