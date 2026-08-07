import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { ProductBillingOptionSelectObjectSchema as ProductBillingOptionSelectObjectSchema } from './objects/ProductBillingOptionSelect.schema';
import { ProductBillingOptionCreateManyInputObjectSchema as ProductBillingOptionCreateManyInputObjectSchema } from './objects/ProductBillingOptionCreateManyInput.schema';

export const ProductBillingOptionCreateManyAndReturnSchema: z.ZodType<Prisma.ProductBillingOptionCreateManyAndReturnArgs> = z.object({ select: ProductBillingOptionSelectObjectSchema.optional(), data: z.union([ ProductBillingOptionCreateManyInputObjectSchema, z.array(ProductBillingOptionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ProductBillingOptionCreateManyAndReturnArgs>;

export const ProductBillingOptionCreateManyAndReturnZodSchema = z.object({ select: ProductBillingOptionSelectObjectSchema.optional(), data: z.union([ ProductBillingOptionCreateManyInputObjectSchema, z.array(ProductBillingOptionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();