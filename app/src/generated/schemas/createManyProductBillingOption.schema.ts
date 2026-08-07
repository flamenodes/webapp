import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { ProductBillingOptionCreateManyInputObjectSchema as ProductBillingOptionCreateManyInputObjectSchema } from './objects/ProductBillingOptionCreateManyInput.schema';

export const ProductBillingOptionCreateManySchema: z.ZodType<Prisma.ProductBillingOptionCreateManyArgs> = z.object({ data: z.union([ ProductBillingOptionCreateManyInputObjectSchema, z.array(ProductBillingOptionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ProductBillingOptionCreateManyArgs>;

export const ProductBillingOptionCreateManyZodSchema = z.object({ data: z.union([ ProductBillingOptionCreateManyInputObjectSchema, z.array(ProductBillingOptionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();