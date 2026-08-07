import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { BillingAddressCreateManyInputObjectSchema as BillingAddressCreateManyInputObjectSchema } from './objects/BillingAddressCreateManyInput.schema';

export const BillingAddressCreateManySchema: z.ZodType<Prisma.BillingAddressCreateManyArgs> = z.object({ data: z.union([ BillingAddressCreateManyInputObjectSchema, z.array(BillingAddressCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BillingAddressCreateManyArgs>;

export const BillingAddressCreateManyZodSchema = z.object({ data: z.union([ BillingAddressCreateManyInputObjectSchema, z.array(BillingAddressCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();