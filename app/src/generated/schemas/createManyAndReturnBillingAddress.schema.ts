import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { BillingAddressSelectObjectSchema as BillingAddressSelectObjectSchema } from './objects/BillingAddressSelect.schema';
import { BillingAddressCreateManyInputObjectSchema as BillingAddressCreateManyInputObjectSchema } from './objects/BillingAddressCreateManyInput.schema';

export const BillingAddressCreateManyAndReturnSchema: z.ZodType<Prisma.BillingAddressCreateManyAndReturnArgs> = z.object({ select: BillingAddressSelectObjectSchema.optional(), data: z.union([ BillingAddressCreateManyInputObjectSchema, z.array(BillingAddressCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BillingAddressCreateManyAndReturnArgs>;

export const BillingAddressCreateManyAndReturnZodSchema = z.object({ select: BillingAddressSelectObjectSchema.optional(), data: z.union([ BillingAddressCreateManyInputObjectSchema, z.array(BillingAddressCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();